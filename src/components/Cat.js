import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";
import cat from "../assets/cat.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Cat = styled.div`
  background: url(${cat}) no-repeat;
  width: 51px; /*130px;*/
  height: 51px; /*130px;*/
  animation: ${rotate} 2s linear infinite;
`;

export default Cat;
