import React, { useRef, useEffect } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  /** Load YouTube API once */
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    // If YT is already loaded (navigating back), init immediately
    if (window.YT && window.YT.Player) {
      initPlayer();
    }

    return () => {
      if (playerRef.current) playerRef.current.destroy();
    };
  }, []);

  /** Initialize YT Player */
  const initPlayer = () => {
    const newPlayer = new window.YT.Player(iframeRef.current, {
      videoId: "MRt8DxYhN90",
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 1, // ✅ Use YouTube’s native controls
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
    });
    playerRef.current = newPlayer;
  };

  /** Pause video if section is scrolled out of view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && playerRef.current) {
          playerRef.current.pauseVideo();
        }
      },
      { threshold: 0.25 } // pause if <25% visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="video-section" ref={sectionRef}>
      <div className="video-wrapper">
        <iframe
          ref={iframeRef}
          title="YouTube video"
          className="yt-iframe"
          src="https://www.youtube.com/embed/MRt8DxYhN90?enablejsapi=1&modestbranding=1&rel=0&playsinline=1&controls=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
