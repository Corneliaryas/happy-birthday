import React from 'react'
import styled from 'styled-components'

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
`

const Subheadline = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 40px;
font-weight: 200;
width: 85%;
text-align: center;
color: rgb(255,245,235);
/* line-height:50px; */
`

const Paragraph = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 400;
color: rgb(255,245,235);
text-align: center;
`

const Regards = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 400;
color: rgb(255,245,235);
`