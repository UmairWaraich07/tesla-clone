import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  image,
  leftBtn,
  rightBtn,
  mobileImage,
  isUnderline,
  opacity = false,
}) => {
  return (
    <Wrap deskImg={image} mobImg={mobileImage} underline={isUnderline}>
      <ItemText>
        <h2>{title}</h2>
        <p>{description}</p>
      </ItemText>

      <ButtonWrapper>
        {leftBtn && <LeftButton>{leftBtn}</LeftButton>}
        {rightBtn && <RightButton opacity={opacity}>{rightBtn}</RightButton>}
      </ButtonWrapper>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  height: 100dvh;
  width: 100%;
  scroll-snap-align: center;

  background-image: ${(props) => `url('/images/${props.deskImg}')`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  p {
    line-height: 1.2;
    font-size: 0.95rem;
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
    text-underline-offset: ${(props) => (props.underline ? "4px" : "0px")};
  }

  @media (max-width: 599px) {
    background-image: ${(props) => `url('images/${props.mobImg}')`};
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;
const ItemText = styled.div`
  padding-top: 13vh;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 599px) {
    flex-direction: column;
    gap: 15px;
  }
`;
const LeftButton = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  color: inherit;
  padding-block: 0.7em;
  width: 270px;
  background-color: rgba(244, 244, 244, 0.8);
  cursor: pointer;
  @media (max-width: 599px) {
    font-size: 0.8rem;
    font-weight: 400;
    width: 300px;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: ${(props) =>
    props.opacity ? "rgba(23, 26, 32, 1)" : "rgba(23, 26, 32, .65)"};
  color: #fff;
`;

export default Section;
