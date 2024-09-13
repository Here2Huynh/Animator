import { SvgIcon, SvgIconProps, keyframes } from "@mui/material";
import { IconWrapper } from "./IconWrapper";
import { useState } from "react";
import { Keyframes } from "@emotion/react";

const openTrash: Keyframes = keyframes`
    0% {
        transform: translate(0, 0)
    }

    100% {
        transform: translate(0, -10px);
    }
`;

const closeTrash: Keyframes = keyframes`
    0% {
        transform: rotate(10deg) translate(-2px, -10px);
    }
    50% {
        transform: rotate(10deg) translate(-2px, -2px);
    }
    70% {
        transform: rotate(-10deg) translate(2px, -2px);
    }
    90% {
        transform: rotate(10deg) translate(-2px, -2px);
    }
    100% {
        transform: rotate(0deg) translate(0, 0);
    }
`;

export const AnimatedDelete: React.FC<SvgIconProps> = (props) => {
  const [animationStyle, setAnimationStyle] = useState<string>("");

  const handleMouseOver = (): void => {
    const style = `${openTrash} 0.5s forwards 1`;
    setAnimationStyle(style);
  };

  const handleMouseOut = (): void => {
    const style = `${closeTrash} 0.25s forwards 1`;
    setAnimationStyle(style);
  };

  return (
    <IconWrapper
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        "path:first-of-type": {
          transformOrigin: "center",
          animation: `${animationStyle}`,
        },
      }}
    >
      <SvgIcon
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...props}
      >
        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6z" />
      </SvgIcon>
    </IconWrapper>
  );
};
