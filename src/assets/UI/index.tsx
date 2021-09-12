import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem;
  color: darkblue;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 4rem;
  color: rgb(174, 10, 13);

 
`;

export const Input = styled.input`
  text-align: center;
  margin: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  font-family: sans-serif;
  width: 20rem;

  :focus {
    background-color: #b6b6cf;
    color: black;
    font-weight: bold;
  }
`;

export const TextArea = styled.textarea`
  margin: 1rem;
  text-align: center;
  font-family: sans-serif;
  border-radius: 1rem;
  width: 20rem;

  :focus {
    background-color: #b6b6cf;
    color: black;
    font-weight: bold;
  }
`;

export const ButtonSubmit = styled.button `

width: 20rem;
background-color: black ;
border-radius: 1rem;
padding: 0.2rem;
cursor: pointer;

:active {

    background-color: rgb(174, 10, 13);
}

`