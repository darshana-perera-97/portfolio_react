import React from "react";
import Grid from "@mui/material/Grid";
import Body from "./Body/Body";
import SideBar from "./SideBar/SideBar";

export default function Design() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={11.5} sm={12}>
          <Body />
        </Grid>
        <Grid item md={0.5} xs={12}>
          <SideBar />
        </Grid>
      </Grid>
    </div>
  );
}
