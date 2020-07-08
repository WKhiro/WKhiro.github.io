import React from "react";

export default function Sandbox(props) {
  return (
    <p>
      <a href={props.link}>{props.title}</a> - {props.text}
    </p>
  );
}
