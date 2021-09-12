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


:hover {

background-color: darkblue;
color: black;
}

:active {

    background-color: rgb(174, 10, 13);
}



`


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
`;



export const Table = styled.table`


    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
   background-color: transparent;
   width: auto;
   height: auto;
   justify-content: center;
   border-radius: 1rem;

   .done {

      text-decoration:line-through;
      color:rgb(174, 10, 13) ;
      font-style: italic;
   }

`

export const Tr = styled.tr `

    display: flex;
    justify-content: space-around;
    overflow: ellipsis;
    margin-bottom: 0.5rem;
    width: 80rem;
    height: auto;
    border-bottom: 1px solid darkblue;
 
`

export const Td = styled.td `


    padding: 2rem;
    font-family: sans-serif;
    font-size: 1rem;
    color: white;
`

export const BoxList  = styled.div `

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: auto;
   width: auto;
`

export const BoxButtons = styled.div `

   display: flex;
`
export const ButtonFeatures = styled.button `

cursor: pointer;
   width: auto;
   height: auto;
   border-radius: 2rem;
   background-color: lightgray;
   padding:1rem;
   margin: 1rem;

  :nth-child(1) {

      :hover {

          background-color: darkblue;
          color: white;
      }
  }

  :nth-child(2) {

    :hover {

      background-color: rgb(174, 10, 13);
          color: white;
    }
  }

`