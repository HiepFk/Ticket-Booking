import React from "react";
import styled from "styled-components";

function Video() {
  return (
    <Wrapper className="app">
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Trailer</div>
      </div>
      <div class="video-container">
        <iframe
          // src={`https://www.youtube.com/embed/${item?.key}`}
          src={`https://www.youtube.com/embed/EHWxGt-LckA`}
          width="100%"
          // height="600"
          title="video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 5rem;
  .title {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
  }
  .pillar {
    width: 0.25rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.75rem;
    color: white;
    font-weight: 600;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export default Video;
