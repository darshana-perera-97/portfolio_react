import React from "react";
import Grid from "@mui/material/Grid";
import Left from "./Left/Left";
import Right from "./Right/Right";

export default function Body() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <Left />
        </Grid>
        <Grid item md={8} sm={12}>
          <Right />
        </Grid>
      </Grid>
    </div>
  );
}
