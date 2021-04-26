import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer>
            <ByLine>Top Spring Summer 2021 Fashion Trends To Shop Now</ByLine>
            <ByLine>Originally Published on <a style={{textDecoration: 'none', color: '#fff'}}href='https://www.refinery29.com/en-us/archives/2021/04/13'>April 13, 2021</a>, 1:00 AM</ByLine>
            <ByLine>Style • Fashion • Fashion Week • The Latest • Shopping</ByLine>
            <ByLine>
                <FeaturedByLine>
                    <a style={{textDecoration: 'none', color: '#FFF'}}target='_blank' href='https://www.refinery29.com/en-us/author/eliza-huber'>written by <FeatureName>Eliza Huber</FeatureName></a>
                </FeaturedByLine>
            </ByLine>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    margin-top: 40px;
`

const ByLine = styled.div`
    font-family: Brown Regular,sans-serif;
    font-size: 12px;
    letter-spacing: .1em;
    line-height: 1.4em;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    margin: 15px;
    color: #fff;
`

const FeaturedByLine = styled(ByLine)`
    display: inline-block;
    padding: 2em;
    vertical-align: top;
    width: 182px;
`

const FeatureName = styled.span`
    display: table;
    margin: .5em auto 0;
    width: 7em;
    word-spacing: 100em;
`