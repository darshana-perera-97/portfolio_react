import React from "react";
import SingleRound from "./SingleRound";

export default function Skills() {
  return (
    <div>
      <p
        style={{
          margin: "0px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "white",
        }}
      >
        Languages
      </p>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            background: "#252527",
            padding: "0px 20px",
            borderRadius: "18px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                margin: "8px 4px",
                fontSize: "18px",
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              English
            </p>
            <SingleRound val="80" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                margin: "8px 4px",
                fontSize: "18px",
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              Sinhala
            </p>
            <SingleRound val="90" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                margin: "8px 4px",
                fontSize: "18px",
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              Tamil
            </p>
            <SingleRound val="30" />
          </div>
        </div>
      </div>
    </div>
  );
}
