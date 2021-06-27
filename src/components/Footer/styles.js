import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
/* import { fadeIn } from "../../components/styles/animation"; */

export const Nav = styled.nav`
  align-items: center;
  background: #f0f8de;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  ${"" /*   max-width: 500px; */}
  width: 100%;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

/* export const NavLink = styled(LinkRouter)`
  ${fadeIn({ time: ".5s" })};
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #1c3643;

    &:after {
      ${fadeIn({ time: "0.5s" })};
      content: "•";
      position: absolute;
      bottom: -2px;
      color: #58902d;
      font-size: 20px;
      line-height: 20px;
    }
  }
`;

export const Link = styled(LinkRouter)`
  ${fadeIn({ time: ".5s" })};
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #1c3643;

    &:after {
      ${fadeIn({ time: "0.5s" })};
      position: absolute;
      bottom: -2px;
      font-size: 20px;
      line-height: 20px;
    }
  }
`;
 */
