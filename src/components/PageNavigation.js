import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/E-Commerce">Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 4rem;
  background-color: #ebecf0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.2rem;
  font-size: 2rem;

  a {
    font-size: 2rem;
    color: purple;
  }
`;

export default PageNavigation;
