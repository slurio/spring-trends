import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <>
      <NavigationBar>
        <Logo href='https://www.refinery29.com/en-us' title='Refinery29'>
          <ImgDiv></ImgDiv>
        </Logo>
        <NavCategories>
          <NavCategory>
            <DiscoverCategory>
              <DiscoverSpan>discover</DiscoverSpan>
            </DiscoverCategory>
          </NavCategory>
        </NavCategories>
      </NavigationBar>
      <BackBar></BackBar>
    </>
  );
}

export default NavBar;

const NavigationBar = styled.div`
  height: 58px;
  position: relative;
  border: red 1px solid;
  padding-left: 30px;
  padding-right: 30px;
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
  display: block;
  padding: 0;
  margin: 0 auto;
  user-select: none;
  @media (max-width: 1220.98px) {
    max-width: 403px;
  }
`

const NavCategory = styled.li`
  font-family: Brown Bold,sans-serif;
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .2em;
  color: #fff;
  text-align: left;
`

const DiscoverCategory = styled.div`
  color: #ef4b4b;
  height: 58px;
  position: relative;
  @media (max-width: 1220.98px) {
    font-size: 12px;
    padding: 0 5px 0 10px;
    text-align: center;
  }
`

const DiscoverSpan = styled.span`
  position: relative;
`

const BackBar = styled.div`
    border: green solid 1px;
    width: 100%;
    height: 35px;
`