import SettingsIcon from "@mui/icons-material/Settings";
import { SvgIconProps, styled } from "@mui/material";
import { Tilt } from "../lib/styles/basics";

export const AnimatedSettings: React.FC<SvgIconProps> = styled(SettingsIcon)({
  "&:hover": {
    animation: `${Tilt} 1s ease-in-out backwards 1`,
  },
});
