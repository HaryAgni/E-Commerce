import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/E-Commerce">
        <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" className="logo" />
      </NavLink>
      <Nav />
    </Mainheader>
  );
};

const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #ebecf0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem;
  }
`;

export default Header;
