import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function SingleSkill(prop) {
  return (
    <div>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ color: "white", marginTop: "10px", marginBottom: "4px" }}>
          {prop.name}
        </p>
        <LinearProgress variant="determinate" value={prop.val} />
      </div>
    </div>
  );
}
