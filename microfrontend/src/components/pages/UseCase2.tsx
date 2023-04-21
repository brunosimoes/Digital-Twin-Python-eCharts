import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

export default function Application() {
  return <Paper sx={{ m: 1, height: "calc(100vh - 20px)" }}>
    <Stack spacing={1} direction={"row"} sx={{ justifyContent: "center" }}>
      <Typography>Demo 2</Typography>
    </Stack>
  </Paper>
};
