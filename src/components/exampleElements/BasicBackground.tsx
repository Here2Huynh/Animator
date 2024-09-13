import { Box, SxProps, Theme } from "@mui/material";
import BgImg from "../../../assets/rachel-coyne-pool.jpg";

export const BasicBackground = ({
  bgSx,
}: {
  bgSx?: SxProps<Theme>;
}): JSX.Element => {
  return (
    <Box
      component={"img"}
      alt="background-image"
      src={BgImg}
      sx={{ ...bgSx, height: "100vh", width: "100vw" }}
    />
  );
};
