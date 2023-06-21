import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Model = ({
  title,
  description,
  image,
  leftBtn,
  rightBtn,
  mobileImage,
  isUnderline,
  stats: { range, speed, topSpeed, price },
  black,
}) => {
  return (
    <Wrapper>
      <Navbar black={black} />
      <Wrap deskImg={image} mobImg={mobileImage}>
        <ItemText underline={isUnderline} black={black}>
          <h2>{title}</h2>
          <p>{description}</p>
        </ItemText>

        <ModelWrapper
          as={motion.div}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ModelInformation>
            {range && (
              <ModelStat>
                <h4>
                  {range.value} <span>{range.unit}</span>{" "}
                </h4>
                <p>{range.desc}</p>
              </ModelStat>
            )}
            {speed && (
              <ModelStat>
                <h4>
                  {speed.time} <span>{speed.unit}</span>{" "}
                </h4>
                <p> {speed.desc} </p>
              </ModelStat>
            )}
            {topSpeed && (
              <ModelStat>
                <h4>
                  {topSpeed.speed} <span> {topSpeed.unit} </span>{" "}
                </h4>
                <p>{topSpeed.desc}</p>
              </ModelStat>
            )}
            {price && (
              <ModelStat>
                <h4>
                  {price.value} <span></span>{" "}
                </h4>
                <p> {price.desc} </p>
              </ModelStat>
            )}
          </ModelInformation>

          <ButtonWrapper>
            <LeftButton>{leftBtn}</LeftButton>
            <RightButton>{rightBtn}</RightButton>
          </ButtonWrapper>
        </ModelWrapper>
      </Wrap>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

const Wrap = styled.div`
  position: relative;
  height: 140dvh;
  width: 100%;

  background-image: ${(props) => `url('/${props.deskImg}')`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  @media (max-width: 599px) {
    background-image: ${(props) => `url('/${props.mobImg}')`};
    height: 100dvh;
  }
`;
const ItemText = styled.div`
  padding-top: 17vh;
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: ${(props) => (props.black ? "#171a20" : "#fff")};
  }
  p {
    line-height: 1.2;
    font-size: 0.95rem;
    color: ${(props) => (props.black ? "#393c41" : "#fff")};

    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
    text-underline-offset: ${(props) => (props.underline ? "4px" : "0px")};
  }

  @media (max-width: 599px) {
    padding-top: 13vh;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const ModelWrapper = styled.div`
  padding-bottom: 10vh;
  display: grid;
  gap: 30px;
  @media (max-width: 599px) {
    background-image: ${(props) => `url('/${props.mobImg}')`};
    padding-bottom: 5vh;
  }
`;
const ModelInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
  h4 span {
    font-size: 1.3rem;
    font-weight: 500;
  }
  p {
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (max-width: 599px) {
    gap: 30px;
    h4 {
      font-size: 1.2rem;
    }
    h4 span {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
const ModelStat = styled.div``;

const ButtonWrapper = styled.div`
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
  font-size: 0.875rem;
  font-weight: 600;
  color: inherit;
  padding-block: 0.8em;
  width: 270px;
  background-color: #fff;
  border: 3px solid white;
  color: #171a20;
  cursor: pointer;
  @media (max-width: 599px) {
    font-size: 0.8rem;
    font-weight: 400;
    width: 300px;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: transparent;
  border: 3px solid white;
  color: #fff;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: white;
    color: #171a20;
  }
`;

export default Model;
