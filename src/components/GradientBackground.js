import React from "react";
import { Particles } from "react-particles-js";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  /* Background configuration */
  .gradient {
    background: no-repeat;
    background-color: black; /* primary color of gradient */
    background-size: cover;
    position: fixed;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    z-index: -3;
  }

  .gradientContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
`;

export const GradientBackground = () => (
  <BackgroundStyle>
    <div className="gradientContainer">
      {/* Value_area: smaller = denser clusters */}
      <Particles
        className="gradient"
        params={{
          particles: {
            color: {
              value: "#FFFFFF",
            },
            line_linked: {
              color: {
                value: "#33A3FF",
              },
            },
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            size: {
              value: 3,
            },
          },
        }}
      />
    </div>
  </BackgroundStyle>
);
