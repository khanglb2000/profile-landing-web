import React, { useState } from "react";
import { Button } from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <div
        style={{
          height: "2.8rem",
          width: "2.8rem",
          backgroundColor: "#1e40af",
          borderRadius: "50%",
          display: visible ? "block" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faCircleUp}
          onClick={scrollToTop}
          style={{
            display: visible ? "inline" : "none",
            position: "absolute",
            top: -1,
            left: -1,
          }}
        />
      </div>
    </Button>
  );
};

export default ScrollButton;
