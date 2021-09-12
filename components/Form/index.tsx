import styled from "styled-components";
import { ButtonSubmit, Input, Label, TextArea } from "../../src/assets/UI";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
`;

export default function Form() {
    



  return (
    <FormContainer>
      <Label htmlFor="category">
        Category
        <Input type="text" id="category" required placeholder="category" />
      </Label>

      <Label htmlFor="task">
        Task
        <Input type="text" id="task" required placeholder="task" />
      </Label>

      <Label htmlFor="commentary">
        Commentary
        <TextArea id="commentary" cols={50} rows={5}></TextArea>
      </Label>
      <ButtonSubmit type="submit">
        ➕
      </ButtonSubmit>
    </FormContainer>
  );
}
