import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper role="list">
      <FooterList>
        <p>Tesla &copy; {new Date().getFullYear()}</p>
        <p>Privacy & Legal</p>
        <p>Vehicle Recalls</p>
        <p>Contact</p>
        <p>News</p>
        <p>Get Updates</p>
        <p>Locations</p>
      </FooterList>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 30px;
  padding-top: 50px;
  scroll-snap-align: center;
`;
const FooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  p {
    font-size: 13px;
    color: rgba(23, 26, 32, 0.7);
    cursor: pointer;
    font-weight: 500;
    @media (max-width: 599px) {
      :nth-child(4) {
        display: none;
      }
      :nth-child(6) {
        display: none;
      }
      :nth-child(7) {
        display: none;
      }
    }
  }
  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export default Footer;
