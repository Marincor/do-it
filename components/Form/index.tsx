import { useEffect, useState } from "react";
import { ButtonSubmit, FormContainer, Input, Label, TextArea } from "../../src/assets/UI";
import { requestApiGet, requestApiPost } from "../functions/request";


export default function Form({setItems, items}) {
  const [toDo, setToDo] = useState({ category: "", task: "", commentary: "", id: 0 });
  const url: string = "api/tasklist";


  useEffect(()=>{
    const currentList = JSON.parse(window.localStorage.getItem('DoiT')) || [];

    
    requestApiGet(url, setItems)

    requestApiPost(url, currentList)
 

  }, [items.length > 0] )



  function createCategory(e) {
    setToDo({ ...toDo, category: e.target.value, id: Math.round(Math.random()*15685) });
  }
  function createTask(e) {
    setToDo({ ...toDo, task: e.target.value });
  }

  function createCommentary(e) {
    setToDo({ ...toDo, commentary: e.target.value });
  }

  function createToDo(e) {
    e.preventDefault();
   
 

    const currentList = JSON.parse(window.localStorage.getItem('DoiT')) || [];
    currentList.push(toDo)

    window.localStorage.setItem('DoiT', JSON.stringify(currentList))

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        currentList,
      }),
    });



    setToDo({ ...toDo, category: '', task: '', commentary: ''  });


     setItems(currentList);
 
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
