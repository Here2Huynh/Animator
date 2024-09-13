import { SxProps, Theme, Typography } from "@mui/material";

export const BasicText = ({
  text,
  textSx,
}: {
  text?: string;
  textSx?: SxProps<Theme>;
}): JSX.Element => {
  return (
    <Typography variant="h2" sx={textSx}>
      {text ?? "Greetings, World"}
    </Typography>
  );
};
