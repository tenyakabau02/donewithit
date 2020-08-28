import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import logo from '../logo.svg';
import styled from 'styled-components';
import ButtonContainer from './Button';

class Navbar extends React.Component {

  render() {
     return (
      <NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
       <Link to = "/">
         <img src ={logo} className = "navbar-brand" alt = "logo" />
       </Link>
       <ul className = "navbar-nav align-items-center">
          <li className = "nav-item ml-5">
            <Link to = "/" className = "nav-link">products</Link>
          </li>
       </ul>
       <Link to = "/cart" className = "ml-auto">
         <ButtonContainer>
          <span className = "mr-2"><FaHome /></span>mycart
        </ButtonContainer>
       </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size :1.3rem;
      text-transform :capitalize;
    }
    `

export default Navbar;
