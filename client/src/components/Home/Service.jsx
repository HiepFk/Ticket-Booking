import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import img from "../../assets/cinema.jpg";
function Service() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1200,
      backSpeed: 120,
      typeSpeed: 200,
      strings: ["Movie", "Event"],
    });
  }, []);
  return (
    <Wrapper
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
      className="app"
    >
      <div className="container">
        <div className="info">
          <h3 className="text">Book your</h3>
          <h3 className="text">
            TICKETS FOR <span ref={textRef} />{" "}
          </h3>
          <p className="text_small">
            Safe, secure, reliable ticketing.Your ticket to live entertainment!
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 5rem;
  height: 50vh;
  position: relative;
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.8);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    padding-top: 10vh;
    z-index: 99;
    margin: 0 auto;
    color: white;
  }
  .text {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 4rem;
    transition: all 0.25s linear;
    span {
      color: #31d7a9;
    }
  }
  .text_small {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {
    height: 40vh;
    .text {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .text_small {
      font-size: 1rem;
      text-align: center;
    }
    /* display: none; */
  }
`;
export default Service;
