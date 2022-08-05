import React from "react";
import SingleSkill from "./SingleSkill";

export default function Work() {
  return (
    <div style={{marginBottom:"40px"}}>
      <p
        style={{
          margin: "0px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "white",
          marginTop: "40px",
        }}
      >
        My Skills
      </p>
      <SingleSkill name="React" val="75"/>
      <SingleSkill name="Web Development" val="80"/>
      <SingleSkill name="Java" val="75"/>
      <SingleSkill name="Mobile Development" val="60"/>
      <SingleSkill name="UX UI Design" val="80"/>
      <SingleSkill name="Arduino" val="85"/>
      <SingleSkill name="Graphic Design" val="90"/>
      <SingleSkill name="Backend Development" val="30"/>
    </div>
  );
}
