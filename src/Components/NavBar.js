import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <>
        <NavigationBar></NavigationBar>
        <BackBar></BackBar>
    </>
  );
}

export default NavBar;

const NavigationBar = styled.div`
    border: red solid 1px;
    width: 100%;
    height: 65px;
`

const BackBar = styled.div`
    border: green solid 1px;
    width: 100%;
    height: 35px;
`