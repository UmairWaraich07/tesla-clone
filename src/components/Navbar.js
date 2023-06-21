import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ black, isFixed }) => {
  const [showSideMenu, handleSideMenu] = useState(false);
  const { cars } = useSelector((store) => store.cars);
  const navigate = useNavigate();

  return (
    <Nav black={black} isFixed={isFixed}>
      <img
        src="/images/logo.svg"
        alt="Tesla Logo"
        onClick={() => navigate("/")}
      />
      <MainMenu>
        <MenuWrapper black={black}>
          {cars.map(({ name, id }) => (
            <li key={id}>
              <a href={`/${id}`}>{name}</a>
            </li>
          ))}
        </MenuWrapper>
        <MenuWrapper black={black}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#" onClick={() => handleSideMenu(true)}>
              Menu
            </a>
          </li>
        </MenuWrapper>
        <Menu black={black}>
          <a href="#" onClick={() => handleSideMenu(true)}>
            Menu
          </a>
        </Menu>
      </MainMenu>

      <SidebarMenu showSideMenu={showSideMenu}>
        <CloseIconWrapper>
          <CloseIcon onClick={() => handleSideMenu(false)} />
        </CloseIconWrapper>

        {cars.map(({ name, id }) => (
          <li key={id}>
            <a href={`/${id}`}>{name}</a>
          </li>
        ))}
      </SidebarMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 16px 20px;
  position: fixed;
  position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
  top: 0;
  width: 100%;
  color: #fff;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-left: 10px;
    cursor: pointer;
    filter: ${(props) =>
      props.black
        ? "brightness(0) saturate(100%)"
        : "brightness(100%) saturate(0)"};
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  li {
    list-style: none;
    padding: 6px 16px;
    border-radius: 6px;
    transition: all 0.1s ease-in;
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.black ? "#171a20" : "#fff")};
    font-size: 0.875rem;
    font-weight: 600;
    word-spacing: 2px;
  }
  li:hover {
    background-color: rgba(255, 255, 255, 0.15);
    background: rgba(80, 78, 78, 0.1);

    backdrop-filter: blur(5px);
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const MainMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Menu = styled.div`
  display: none;

  a {
    color: ${(props) => (props.black ? "#171a20" : "#fff")};
    padding: 6px 16px;
    font-weight: 600;
    border-radius: 6px;
    background: rgba(80, 78, 78, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  @media (max-width: 1200px) {
    display: block;
  }
`;

const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px 40px;
  padding-bottom: 30vh;
  overflow-y: scroll;
  z-index: 50;
  transform: ${(props) =>
    props.showSideMenu ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    list-style: none;
  }
  a {
    color: #111;
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
const CloseIconWrapper = styled.div`
  color: #111 !important;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding-bottom: 20px;
`;

export default Navbar;
