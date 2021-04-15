// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import styled from 'styled-components';

function App() {
  return (
    <>
      <NavBar/>
        <Image src='https://www.refinery29.com/images/10415994.jpg?format=webp&width=1220&height=458&quality=85&crop=8%3A3'></Image>
        <Article>
          <HeaderContainer>
            <Header>7 Spring Fashion Trends That Are Bringing Joy Back To Dressing</Header>
            <Paragraph>With vaccine rollouts bringing about a more optimistic horizon, we’re seeing these spring collections with a newfound sense of excitement.</Paragraph>
            <Author>
              <span>Eliza Huber</span>
            </Author>
            <Modified>
              <span>Last Updated April 13, 2021, 5:00 AM</span>
            </Modified>
            <SquigglyLine src='https://www.refinery29.com/images/9829457.png' alt='Squiggly Line'/>     
          </HeaderContainer>
        </Article>
    </>
  );
}

export default App;

const Article = styled.div`
  margin: 0 auto;
  padding: 30px 0 50px;
  max-width: 840px;
`

const Image = styled.img`
  width: 100%;
`

const HeaderContainer = styled.div`
  text-align: center;
  min-width: 280px;
  max-width: 720px;
  margin: 0 auto;
`

const Header = styled.h1`
  font-family: Brown Regular, Gill Sans, Arial, Helvetica, Roboto, Segoe UI Light, Ubuntu Light, DroidSans, sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: -.02em;
  line-height: 1.3em;
  padding: 0 30px;
  text-align: center;
  margin-top: 0;
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
  text-align: center;
  max-width: 400px;
`