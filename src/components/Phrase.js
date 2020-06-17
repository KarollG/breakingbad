import React from 'react';
import styled from '@emotion/styled';

const ContainerPhrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media(min-width: 972px){
        margin-top: 16rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 8.5rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 1rem;
    }
`;

const Phrase = ({phrase}) => {

    return (
        <ContainerPhrase>
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author} </p>
        </ContainerPhrase>
     );
}

export default Phrase;