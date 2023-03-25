import styled from "styled-components";
import {useHistory} from 'react-router-dom'
// import { Link } from "react-router-dom";
import "./Home.css";


const Home = ({currentUser}) => {
 let history=useHistory()
    return (
      

    <Nav>
       {!currentUser && history.push("/login")}
            <Logo>
                <h3 className="white">Tech-X-Cyber</h3>
            </Logo>
        <>
            <NavMenu>
                <a href="/about" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    NEWS
                </a>
                <a href="/events" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    STORE
                </a>
                <a href="/esports" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    CONTACT
                </a>
                <a href="/signup" className="nav-menu nav">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SIGN UP
                </a>
                <a className="nav-menu-discuss">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DISCUSSION
                </a>
            </NavMenu>
        </>
    </Nav>
)};


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const Logo = styled.a`
  color: #fff;
  padding: 0;
  margin-top: 4px;
  display: inline-block;
  h3{
    padding: 0 16px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const Login = styled.a`
  background-color: rgba(0,0,0,0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover{
      background-color:#f9f9f9;
      color: #000;
      border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

// const SignOut = styled.div`
//   position: relative;
//   height: 48px;
//   width: 48px;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   justify-content: center;
//   ${UserImg} {
//     border-radius: 50%;
//     width: 100%;
//     height: 100%;
//   }
//   &:hover {
//     ${DropDown} {
//       opacity: 1;
//       transition-duration: 1s;
//     }
//   }
// `;

export default Home;