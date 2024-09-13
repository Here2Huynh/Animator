import { LocalActivity } from "@mui/icons-material";
import { SvgIconProps, styled } from "@mui/material";
import { Scale } from "../lib/styles/basics";

export const AnimatedRaffle: React.FC<SvgIconProps> = styled(LocalActivity)({
  "&:hover": {
    animation: `${Scale} 1s ease-in-out 1`,
  },
});
