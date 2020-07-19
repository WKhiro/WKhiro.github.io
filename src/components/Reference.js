import React from "react";
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";

const ReferenceStyle = styled.div`
  .icon {
    display: inline;
    filter: drop-shadow(2px 2px 4px black);
  }

  .iconText {
    display: inline;
    margin-left: 10px;
  }

  /* Copyright text */
  .bottomText {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px black;
  }

  .bottomText.copyRight {
    margin-bottom: 20px;
  }

  a {
    color: #70f0ff;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Reference = () => (
  <ReferenceStyle>
    <div className="bottomText">
      Favicon is made by{" "}
      <a href="http://www.freepik.com/" title="Freepik">
        Freepik
      </a>{" "}
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
    </div>
    <div className="bottomText copyRight">
      <IconContext.Provider value={{ size: "1.5em" }}>
        <div className="icon">
          <FaCopyright />
        </div>
      </IconContext.Provider>
      <div className="iconText">2020 Wesley Kok</div>
    </div>
  </ReferenceStyle>
);
