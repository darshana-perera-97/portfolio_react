import React from "react";
const text = "Warmly_welcome_to_Portfolio ";
const n = text.length;

export default function AnimationText() {
  const [t, setT] = React.useState("");
  const [i, setI] = React.useState(0);

  return (
    <div>
      <p
        style={{
          color: "white",
          margin: "0px",
          paddingLeft: "4%",
          fontWeight: "bold",
          fontSize: "20px",
          width: "100%",
          textShadow: "4px 4px 2px black",
        }}
      >
        {text}
      </p>
    </div>
  );
}
