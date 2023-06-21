import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroVideo
        autoPlay
        muted
        loop
        src="/Homepage-Test_Drive-NA-Desktop.webm"
      ></HeroVideo>
      <ItemText>
        <h2>Experience Tesla</h2>
        <p>Schedule a Demo Drive Today</p>
      </ItemText>
      <HeroButton>Demo Drive</HeroButton>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.header`
  position: relative;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  scroll-snap-align: center;
`;
const HeroVideo = styled.video`
  object-fit: cover;
  height: 100dvh;
  width: 100%;
  z-index: -1;
`;
const ItemText = styled.div`
  position: absolute;
  top: 25vh;
  color: #fff;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  p {
    font-size: 0.9rem;
  }
  @media (max-width: 599px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;
const HeroButton = styled.button`
  border: 3px solid white;
  outline: none;
  position: absolute;
  bottom: 2vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  font-weight: 500;
  width: 270px;
  background: transparent;
  padding-block: 0.6em;
  color: #fff;
  cursor: pointer;
`;

export default Hero;
