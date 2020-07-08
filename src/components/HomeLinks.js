import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";

const Styles = styled.div`
  .linkSpacing {
    margin-bottom: 5px;
  }

  .linkDiv {
    margin-right: 10px;
    display: inline;
    color: #70f0ff;
    &:hover {
      opacity: 0.8;
    }
  }

  .icon {
    display: inline;
    filter: drop-shadow(2px 2px 4px black);
  }

  .iconText {
    display: inline;
    margin-left: 10px;
  }
`;

export default function HomeLinks(props) {
  return (
    <Styles>
      <div className="linkSpacing">
        <a href={props.link}>
          <div className="linkDiv">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="icon">{props.icon}</div>
            </IconContext.Provider>
            <p className="iconText">{props.text}</p>
          </div>
        </a>
      </div>
    </Styles>
  );
}
