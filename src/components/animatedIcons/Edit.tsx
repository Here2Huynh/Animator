import { SvgIconProps, keyframes, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Keyframes } from "@emotion/react";

const pencilEdit: Keyframes = keyframes`
    60% {
        transform: rotate(-30deg) translate(1px, 0);
    }
    70% {
        transform: rotate(0deg) translate(2px, 0)
    }
    80% {
        transform: rotate(-30deg) translate(3px, 0)
    }
    90% {
        transform: rotate(0deg) translate(3px, 0)
    }
    100% {
        transform: rotate(-30deg)  translate(4px, 0)
    }
    `;

export const AnimatedEdit: React.FC<SvgIconProps> = styled(EditIcon)({
  "&:hover": {
    animation: `${pencilEdit}  1s forwards 1`,
  },
});
