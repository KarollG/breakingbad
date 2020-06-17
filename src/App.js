import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4.5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor:pointer;
    background-size:400px;
  }
`;

function App() {

  //sate de frases
  const [phrase, savePhrase] = useState({});

  const consultApi = async ()=> {
    // console.log('Consultando...');
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/V1/quotes');
    // console.log(result);
    const phrase = await api.json();
    savePhrase(phrase[0]);
  }

  //cargar una frase
  useEffect( () => {
    consultApi()
  }, []);
  return (
    <Container>
      <Phrase
        phrase = {phrase}
      />
      <Button
        onClick = {consultApi}
      >
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
