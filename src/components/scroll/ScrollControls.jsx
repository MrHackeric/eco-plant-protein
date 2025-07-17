import React, { useEffect, useState } from "react";
import { Fab, Zoom, Box } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const ScrollControls = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const buttonStyles = {
    backgroundColor: "#04713d",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#035c32",
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 1100,
      }}
    >
      <Zoom in={visible}>
        <Fab size="medium" sx={buttonStyles} aria-label="Scroll to top" onClick={scrollToTop}>
          <KeyboardArrowUp />
        </Fab>
      </Zoom>

      <Zoom in={visible}>
        <Fab size="medium" sx={buttonStyles} aria-label="Scroll to bottom" onClick={scrollToBottom}>
          <KeyboardArrowDown />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default ScrollControls;
