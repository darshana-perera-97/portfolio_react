import React from "react";
import image from "./pro.jpg";
import Skills from "./Skills";
import Work from "./Work";

export default function Left() {
  return (
    <div
      style={{ background: "#454547", padding: "5px", borderRadius: "10px" }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px 0px",
          paddingBottom: "0px",
        }}
      >
        <img
          src={image}
          alt="profile pic"
          style={{
            borderRadius: "200px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "25px",
          fontWeight: "bold",
          margin: "20px 0px",
          marginBottom: "0px",
        }}
      >
        Darshana Perera
      </p>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "15px",
          margin: "20px 0px",
          marginTop: "10px",
        }}
      >
        Undergraduate <br />
        Trincomalee Campus in EUSL
      </p>
      <Skills />
      <Work />
    </div>
  );
}
