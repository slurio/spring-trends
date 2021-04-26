import React from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import ArticleContent from './Components/ArticleContent';
import Footer from './Components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <>
      <NavBar/>
        <Image src='https://www.refinery29.com/images/10415994.jpg?format=webp&width=1220&height=458&quality=85&crop=8%3A3'></Image>
        <Article>
          <Header/>      
          <MainContent>
            <EditorialContent>
              <ArticleContent/>
            </EditorialContent>
          </MainContent>
          <Footer/>
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
  overflow: hidden;
  padding-bottom: 0px;
`

const Image = styled.img`
  width: 100%;
`

const MainContent = styled.div`
  min-width: 280px;
  max-width: 720px;
  margin: 0 auto;
`

const EditorialContent = styled.div``

