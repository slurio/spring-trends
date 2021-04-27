import React from 'react';
import styled from 'styled-components';

function Header() {
    return(
        <HeaderContainer>
            <Title>7 Spring Fashion Trends That Are Bringing Joy Back To Dressing</Title>
            <Paragraph>With vaccine rollouts bringing about a more optimistic horizon, we’re seeing these spring collections with a newfound sense of excitement.</Paragraph>
            <Author>
            <span>Eliza Huber</span>
            </Author>
            <Modified>
            <span>Last Updated April 13, 2021, 5:00 AM</span>
            </Modified>
            <SquigglyLine src='https://www.refinery29.com/images/9829457.png' alt='Squiggly Line'/>     
      </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
  text-align: center;
  min-width: 280px;
  max-width: 720px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: Brown Regular, Gill Sans, Arial, Helvetica, Roboto, Segoe UI Light, Ubuntu Light, DroidSans, sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: -.02em;
  line-height: 1.3em;
  padding: 0 30px;
  text-align: center;
  margin-top: 0;
  @media (max-width: 760.98px) {
    font-size: 25px;
    letter-spacing: -.02em;
    line-height: 1.3em;
  }
`

const Paragraph = styled.p`
  font-family: Brown Light, arial light, helvetica light, sans-serif light;
  font-size: 27px;
  color: #dbff43;
  word-spacing: normal;
  letter-spacing: -.02em;
  line-height: 1.5em;
  padding: 0 60px;
  font-weight: 300;
  @media (max-width: 760.98px) {
    font-size: 20px;
    padding: 0 30px;
  }
`

const Author = styled.div`
  color: #fff;
  font-family: Brown Regular,sans-serif;
  margin: 15px 15px 2px;
  font-size: 12px;
  letter-spacing: .1em;
  line-height: 1.4em;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
`

const Modified = styled(Author)`
  margin: 2px 15px 15px;  
`

const SquigglyLine = styled.img`
  margin: 10px auto 0;
  max-width: 400px;
`