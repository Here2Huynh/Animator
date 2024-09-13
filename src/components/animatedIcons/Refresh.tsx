import { SvgIconProps, styled } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Rotate } from "../lib/styles/basics";

export const AnimatedRefresh: React.FC<SvgIconProps> = styled(RefreshIcon)({
  "&:hover": {
    animation: `${Rotate} 1s 1`,
  },
});
