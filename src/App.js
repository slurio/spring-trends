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
          <MainContent>
            <EditorialContent>
              <SectionContainer>
                <SectionText>
                  <br></br>
                  When we first saw the <Link href="https://www.refinery29.com/en-us/2020/09/10031327/spring-2021-fashion-week-trends">2021 spring collections</Link> in September, we hadn’t any idea what sorts of occasions they’d be worn to once they finally arrived in stores. Now, seven months later, <Link href="https://www.forbes.com/sites/jemimamcevoy/2021/04/04/40-of-us-adults-now-vaccinated-but-here-are-all-the-countries-doing-even-better/">40% of adults in the U.S. are vaccinated</Link>. In turn, a newfound sense of excitement is growing around the fashion trends we can take outside. 
                </SectionText>
              </SectionContainer>
            <SectionContainer>
              <SectionText>
                Ahead, a refresher on all the top trends for spring, from supersized silhouettes at Sportmax and Louis Vuitton to joyful colors and patterns at
                Versace and Miu Miu, all of which we’re now viewing with fresh (and optimistic) eyes — and an open wallet.
              </SectionText>
            </SectionContainer>
            <SectionAdContainer>
              <SectionAd>
                <AdSpan>Advertisement</AdSpan>
                <Ad></Ad>
              </SectionAd>
            </SectionAdContainer>
            {/* <div style={{display: 'block'}}>
            <ImageSectionContainer>
              <SectionRevealContainer> */}
                <FullReveal>
                  <RevealImageLandscape>
                    <RevealFixedWrap>
                      <RevealFixed>
                        <LandscapeImage src='https://www.refinery29.com/images/10414847.jpg' alt='Black background with gray letters that says "power shoulders.'/>
                      </RevealFixed>
                    </RevealFixedWrap>
                  </RevealImageLandscape>
                </FullReveal>
              {/* </SectionRevealContainer>
            </ImageSectionContainer>
            </div> */}
            <FullReveal>
              <RevealImageLandscape>
                <RevealFixedWrap>
                  <RevealFixed>
                    <LandscapeImage src='https://www.refinery29.com/images/10414848.jpg' alt='Rick Owens, Balenciaga, and Isabel Marant models wearing SS21 collections against a black background that says "power. shoulders.'/>
                  </RevealFixed>
                </RevealFixedWrap>
              </RevealImageLandscape>
            </FullReveal>
            </EditorialContent>
          </MainContent>
        </Article>
    </>
  );
}

export default App;

const Article = styled.div`
  display: block;
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

const MainContent = styled.div`
  min-width: 280px;
  max-width: 720px;
  margin: 0 auto;
`

const EditorialContent = styled.div``

const SectionContainer = styled.div`
  margin: 17px auto;
`

const SectionText = styled.div`
  font-family: Brown Regular, Gill Sans, Arial, Helvetica, Roboto, Segoe UI Light, Ubuntu Light, DroidSans, sans-serif;
  color: #fff;
  font-size: 17px;
  line-height: 1.65em;
  font-weight: 500;
`

const Link = styled.a`
  text-decoration: none;
  color: #dbff43;
  border-bottom: 2px solid #fff;
`

const SectionAdContainer = styled.div``

const SectionAd = styled.div`
  width: 100%;
  min-height: 270px;
  margin: auto;
  text-align: center;
`

const AdSpan = styled.span`
  color: #7F7F7F;
  font-family: Brown Regular,sans-serif;
  font-size: 10px;
  letter-spacing:  .1em;
  font-weight: 400;
  text-transform: uppercase;
  height: 0;
  top: 15px;
  display: block;
  position: relative;
`

const Ad = styled.div`
  min-height: 90px;
  padding: 40px 0;
`

// const ImageSectionContainer = styled.div`
//   margin: 17px auto;
//   border: 1px solid red;
// `

// const SectionRevealContainer = styled.div`
//   position: relative;
//   width: 100%;
//   clear: both;
//   border: 1px solid yellow;
// `

const FullReveal = styled.div`
  position: relative;
  left: 50%;
  width: 100vw;
  border: 2px solid green;
  background-color: green;
`

//below sets up the CAP TEXT lanscape view /etc.
const RevealImageLandscape = styled.div`
  display: block;
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
  left: -50vw;
  width: 100%;
  height: 100vh;
  border: 2px solid purple;
`

//below intro come before scroll to reveal CAP TEXT
const RevealFixedWrap = styled.div`
  display: block;
  clip: rect(0,auto,auto,0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid grey;
`

//below lets user scoll intro to reveal CAP TEXT
const RevealFixed = styled.div`
  position: fixed;
  display: block;
  top: 0;
  width: 100%;
  max-width: 1800px;
  height: 100%;
  transform: translateZ(0);
  border: 2px solid pink;
`

// place img and size it correctly
const LandscapeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow-x: hidden;
  border: 2px solid red;
`