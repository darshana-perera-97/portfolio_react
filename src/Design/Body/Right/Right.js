import React from "react";
import AnimationText from "./AnimationText";
import image1 from "./profile.jpg";
const code = "  <code>";
const code2 = "</code>";

export default function Right() {
  return (
    <div
      style={{
        background: "#454547",
        padding: "5px",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px 0px",
          width: "100%",
          // paddingBottom: "0px"
          textAlign: "left",
          padding: "20px",
        }}
      >
        <p style={{ color: "#ffbe06" }}>{code}</p>
        {/* <span style={{ marginLeft: "4%" }}> */}
        <AnimationText />
        {/* </span> */}
        <p style={{ color: "#ffbe06" }}>{code2}</p>
        <img
          src={image1}
          alt="profile pic"
          style={{
            // borderRadius: "200px",
            width: "93%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            margin:"20px 0px"
          }}
        />
      </div>
    </div>
  );
}
