import { SvgIcon, SvgIconProps, keyframes } from "@mui/material";
import { IconWrapper } from "./IconWrapper";
import { useState } from "react";
import { Keyframes } from "@emotion/react";

const openLink: Keyframes = keyframes`
    0% {
        transform: translate(0, 0)
    }
    100% {
        transform: translate(-2px, 0);
    }
`;

const closeLink: Keyframes = keyframes`
    0% {
      transform: translate(-2px, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`;

export const AnimatedLink: React.FC<SvgIconProps> = (props) => {
  const [animationStyle, setAnimationStyle] = useState<string>("");

  const handleMouseOver = (): void => {
    const style = `${openLink} .5s forwards 1`;
    setAnimationStyle(style);
  };

  const handleMouseOut = (): void => {
    const style = `${closeLink} .5s backwards 1`;
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
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1" />
        <path d="M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5" />
      </SvgIcon>
    </IconWrapper>
  );
};
