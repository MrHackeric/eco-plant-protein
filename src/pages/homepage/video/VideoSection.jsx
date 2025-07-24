import React, { useState, useRef, useEffect } from "react";
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  VolumeDown,
  FastForward,
  FastRewind,
  ClosedCaption,
  ClosedCaptionOff,
} from "@mui/icons-material";
import "./VideoSection.css";

const VideoSection = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(videoRef.current, {
        videoId: "MRt8DxYhN90",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          cc_load_policy: 1, // Captions on by default
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(newPlayer);
    };

    return () => {
      if (player) player.destroy();
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.playVideo();
    setIsPlaying(true);
    setVolume(event.target.getVolume());
    setDuration(event.target.getDuration());
    startProgressTimer();
    setVideoReady(true);
  };

  const onPlayerStateChange = (event) => {
    switch (event.data) {
      case window.YT.PlayerState.PLAYING:
        setIsPlaying(true);
        startProgressTimer();
        break;
      case window.YT.PlayerState.PAUSED:
        setIsPlaying(false);
        break;
      case window.YT.PlayerState.ENDED:
        setIsPlaying(false);
        setProgress(0);
        break;
    }
  };

  const startProgressTimer = () => {
    clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(updateProgress, 1000);
  };

  const updateProgress = () => {
    if (player && player.getCurrentTime) {
      const currentTime = player.getCurrentTime();
      setProgress((currentTime / duration) * 100);
    }
  };

  const togglePlay = () => {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
  };

  const handleForward = () => {
    if (!player) return;
    const newTime = player.getCurrentTime() + 10;
    player.seekTo(Math.min(newTime, duration), true);
  };

  const handleBackward = () => {
    if (!player) return;
    const newTime = player.getCurrentTime() - 10;
    player.seekTo(Math.max(newTime, 0), true);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    player.setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      player.unMute();
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }
    setIsMuted(!isMuted);
  };

  const toggleCaptions = () => {
    if (!player) return;
    if (captionsOn) {
      player.setOption("captions", "track", {}); // turns off captions
    } else {
      const tracklist = player.getOption("captions", "tracklist");
      if (tracklist && tracklist.length > 0) {
        player.setOption("captions", "track", tracklist[0]);
      }
    }
    setCaptionsOn(!captionsOn);
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    player.seekTo(newTime, true);
  };

  const resetControlsTimeout = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    resetControlsTimeout();
    return () => clearTimeout(controlsTimeoutRef.current);
  }, []);

  return (
    <section
      className="video-section"
      onMouseMove={resetControlsTimeout}
      onTouchStart={resetControlsTimeout}
    >
      {!videoReady && (
        <div className="video-thumbnail">
          <img
            src="https://img.youtube.com/vi/MRt8DxYhN90/maxresdefault.jpg"
            alt="Video thumbnail"
          />
        </div>
      )}

      <div ref={videoRef} className="video-wrapper" />

      <div className={`video-controls ${showControls ? "visible" : ""}`}>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>

        <div className="controls-container">
          <div className="left-controls">
            <button className="control-btn" onClick={togglePlay}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </button>

            <button className="control-btn" onClick={handleBackward}>
              <FastRewind />
            </button>

            <button className="control-btn" onClick={handleForward}>
              <FastForward />
            </button>

            <div className="volume-control">
              <button className="control-btn" onClick={toggleMute}>
                {isMuted || volume === 0 ? (
                  <VolumeOff />
                ) : volume > 50 ? (
                  <VolumeUp />
                ) : (
                  <VolumeDown />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>

            <button className="control-btn" onClick={toggleCaptions}>
              {captionsOn ? <ClosedCaption /> : <ClosedCaptionOff />}
            </button>
          </div>

          <div className="right-controls">
            <span className="time-display">
              {formatTime((progress / 100) * duration)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      <div className="video-overlay" />
    </section>
  );
};

const formatTime = (seconds) => {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default VideoSection;
