import React from "react";
import { Col } from "antd";

function GridCards(props) {
  if (props.landingPage) {
    return (
      <div>
        <Col lg={6} md={8} xs={12}>
          <div style={{ position: "relative" }}>
            <a href={`/movie/${props.movieId}`}>
              <img
                style={{ width: "100%", height: "320px" }}
                src={props.image}
                alt={props.movieName}
              ></img>
            </a>
          </div>
        </Col>
      </div>
    );
  } else {
    return (
      <div>
        <Col lg={6} md={8} xs={12}>
          <div style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.image}
              alt={props.characterName}
            ></img>
          </div>
        </Col>
      </div>
    );
  }
}

export default GridCards;
