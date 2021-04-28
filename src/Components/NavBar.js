import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <Container>
      <NavigationBar>
        <Logo href='https://www.refinery29.com/en-us' title='Refinery29'>
          <ImgDiv></ImgDiv>
        </Logo>
        <NavCategories>

        </NavCategories>
      </NavigationBar>
      <BackBar></BackBar>

    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  height: 58px;
  position: relative;
  @media (max-width: 1220.98px) and (min-width: 761px) {
    max-width: 1100px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const NavigationBar = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    text-align: center;
    z-index: 300;
    border: red 1px solid;
`

const Logo = styled.a`
  width: 128px;
  height: 100%;
  display: inline-block;
  position: absolute;
  z-index: 350;
  text-decoration: none;
`

const ImgDiv = styled.div`
  display: inline-block;
  position: relative;
  height: 58px;
  width: 100%;
  background-size: contain;
  background-position: 50%, 50%;
  background-repeat: no-repeat;
  background-image: url(https://www.refinery29.com/assets/b1649921d5adbbccbdcc065dd2474644.svg);
`

const NavCategories = styled.ul`
  padding: 0;
  margin: 0 auto;
  user-select: none;
  @media (max-width: 1220.98px) {
    max-width: 403px;
  }
`

const BackBar = styled.div`
    border: green solid 1px;
    width: 100%;
    height: 35px;
`