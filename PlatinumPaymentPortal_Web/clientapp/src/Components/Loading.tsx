import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

interface Props {
  title?: string;
  size?: number;
  width?: number;
  thickness?: number;
}

export default function Loading({ size, width, thickness, title }: Props) {
  return (
    <Box
      sx={{
        container: {
          width: 40,
          height: 40,
          color: "#ffffff",
          backgroundColor: "transparent",
        },
        paperProps: {
          width: width ?? 200,
        },
      }}
    >
      <Typography variant="h2">{title ?? "Loading ..."}</Typography>
      <CircularProgress
        color="inherit"
        size={size ?? 25}
        thickness={thickness ?? 3}
        variant="indeterminate"
      />
    </Box>
  );
}
