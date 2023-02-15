import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderStyled>
      <h2>
        <NavLink
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "black" : "white",
          })}
          to={"/"}
        >
          LOGO{" "}
        </NavLink>
      </h2>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"/form"}
            >
              LOGOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
const HeaderStyled = styled.header`
  height: 100px;
  background-color: blue;
  display: flex;
  color: white;
  li {
    list-style: none;
  }
`;
