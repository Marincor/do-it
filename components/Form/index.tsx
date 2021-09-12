import { useEffect, useState } from "react";
import { ButtonSubmit, FormContainer, Input, Label, TextArea } from "../../src/assets/UI";


export default function Form({setItems}) {
  const [toDo, setToDo] = useState({ category: "", task: "", commentary: "" });
  const url: string = "api/tasklist";
  
  useEffect(()=>{

    const currentList = JSON.parse(window.localStorage.getItem('DoiT')) || [];

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            currentList
        }),
      });

  }, [])

  function createCategory(e) {
    setToDo({ ...toDo, category: e.target.value });
  }
  function createTask(e) {
    setToDo({ ...toDo, task: e.target.value });
  }

  function createCommentary(e) {
    setToDo({ ...toDo, commentary: e.target.value });
  }

  function createToDo(e) {
    e.preventDefault();
   
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        category: toDo.category,
        task: toDo.task,
        commentary: toDo.commentary,
      }),
    });

    window.localStorage.setItem('DoiT', JSON.stringify(toDo))

    setToDo({ ...toDo, category: '', task: '', commentary: ''  });


    
        fetch(url)
          .then((res) => res.json())
          .then((data) => setItems(data));
 
  }

  return (
    <FormContainer onSubmit={createToDo}>
      <Label htmlFor="category">
        Category
        <Input
          type="text"
          id="category"
          required
          placeholder="category"
          value={toDo.category}
          onChange={createCategory}
        />
      </Label>

      <Label htmlFor="task">
        Task
        <Input
          type="text"
          id="task"
          required
          placeholder="task"
          value={toDo.task}
          onChange={createTask}
        />
      </Label>

      <Label htmlFor="commentary">
        Commentary
        <TextArea
          id="commentary"
          cols={50}
          rows={5}
          value={toDo.commentary}
          onChange={createCommentary}
        ></TextArea>
      </Label>
      <ButtonSubmit type="submit">➕</ButtonSubmit>
    </FormContainer>
  );
}
