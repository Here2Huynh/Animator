import { Keyframes } from "@emotion/react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { SvgIconProps, keyframes, styled } from "@mui/material";

const blink: Keyframes = keyframes`
    from { opacity: 0; }
    to { opacity: 1;}
`;

export const AnimatedPriorityHigh: React.FC<SvgIconProps> = styled(
  PriorityHighIcon
)({
  animation: `${blink} 1s linear infinite`,
});
