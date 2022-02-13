import React from "react";
import logo from "./king.png";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #202945;
  height: 65px;
  display: flex;
  text-decoration: none;
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    color: #7595ae;
    text-decoration: none;
  }
`;

const Navbar = ({}) => {
  var w = window.innerWidth;
  React.useEffect(() => {
    function handleResize() {
      w = window.innerWidth;
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      <Nav>
        <div style={{ marginTop: 5 }}>
          <li>
            <a href="/">
              <img height="50" src={logo} alt="" onClick="/" />
            </a>
          </li>
        </div>
        <NavLink style={{ marginTop: 0, fontSize: 100 }} to="/">
          <h1 style={{ fontSize: 30 }} onClick="/">
            Learn and Play Chess
          </h1>
        </NavLink>
        <Nav
          className="ms-auto"
          style={{
            marginTop: 0,
            fontSize: 70,
          }}
          to="/Imprint"
        >
          <NavLink style={{ marginTop: 0, fontSize: 30 }} to="/map">
            <h4
              style={{
                fontSize: 33,
                marginTop: "14px",
                marginRight: "80px",
              }}
              onClick="/map"
            >
              Map
            </h4>
          </NavLink>
          <NavLink style={{ marginTop: 0, fontSize: 30 }} to="/Imprint">
            <h4
              style={{
                fontSize: 30,
                marginTop: "14px",
                marginRight: "55px",
              }}
              onClick="/Imprint"
            >
              Imprint
            </h4>
          </NavLink>

          <NavLink style={{ marginTop: 0, fontSize: 30 }} to="/Maintenance">
            <h4
              style={{
                fontSize: 30,
                marginTop: "14px",
                marginRight: "15px",
              }}
              onClick="/Maintenance"
            >
              Maintenance
            </h4>
          </NavLink>
        </Nav>
      </Nav>
    </div>
  );
};

export default Navbar;
