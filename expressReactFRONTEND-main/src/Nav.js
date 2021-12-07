import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './button/Button';

const NavStyles = styled.nav`
--bg-color: #02182B;
--btn-color: #007eb6;
  min-height: 3rem;

  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  a {
    color: #D7263D;
    padding: 1rem;
    font-size: 2rem;
    text-decoration: none;

  }
  /* button {
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0 1rem;
    background: #007eb6;
    border: 2px solid #fff;
    border-radius: 3px;
    align-self: center;
  } */
`;
const Nav = ({loggedin, setLoggedin }) => {
    return (
        <NavStyles>
          <h1>
            <Link to="/">Welcome to the Anime World!</Link>
          </h1>
    
          {loggedin ? (
            <Button func={() => setLoggedin(false)}>Log Out</Button>
          ) : (
            <Button func={() => setLoggedin(true)}>Log In</Button>
          )}
        </NavStyles>)
}

export default Nav
