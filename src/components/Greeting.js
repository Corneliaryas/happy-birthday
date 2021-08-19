import React from 'react'
import styled, {keyframes} from 'styled-components'

export const Greeting = () => {
    return (
    <Container>
        <Headline>Grattis!</Headline>
        <Subheadline>Kära föräldrar, ta er en kväll på 
        Bodens nyaste restaurang.</Subheadline>
        <Paragraph>Mat och dessert ingår (finns på swish).</Paragraph>
        <Regards>Kram dottern</Regards>
    </Container>
    )
}

const textAnimation = keyframes`
0% { transform: translateY(-50px); opacity: 0; }
100% { transform: translateY(0px); opacity: 1;}`

const greetingAnimation = keyframes`
0% { transform: scale(0); opacity: 0; }
25% {transform: scale(1.05); opacity: 1; }
100% { transform: scale(1); opacity: 1;}`

const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
background-color: #F2AAA0;
`

const Headline = styled.h1`
/* font-family: 'Lemonada', cursive; */
/* font-family: 'Montserrat', sans-serif;*/
font-family: 'Sniglet', cursive;
font-size: 100px;
line-height:100px;
margin-top: 50px;
margin-bottom: 20px;
color: rgb(255,245,235);
animation: ${greetingAnimation} 1s ease-out;
`

const Subheadline = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 40px;
font-weight: 200;
width: 85%;
text-align: center;
color: rgb(255,245,235);
animation: ${textAnimation} 1s ease-out;
animation-delay: 0.1s;
animation-fill-mode: backwards;
/* line-height:50px; */
`

const Paragraph = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 400;
color: rgb(255,245,235);
text-align: center;
animation: ${textAnimation} 1s ease-out;
animation-delay: 0.2s;
animation-fill-mode: backwards;
`

const Regards = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 400;
color: rgb(255,245,235);
animation: ${textAnimation} 1s ease-out;
animation-delay: 0.5s;
animation-fill-mode: backwards;
`