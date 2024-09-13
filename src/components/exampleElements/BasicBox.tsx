import { Box, SxProps, Theme, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const BasicBox = ({
  boxSx,
}: {
  boxSx?: SxProps<Theme>;
}): JSX.Element => {
  return (
    <Box
      sx={{
        ...boxSx,
        bgcolor: blueGrey[400],
        width: 100,
        height: 100,
        borderRadius: 1,
        p: 2,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography sx={{ fontSize: 50 }}>Hi</Typography>
    </Box>
  );
};
