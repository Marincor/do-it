import { useEffect, useState } from "react";
import {
  ButtonSubmit,
  FormContainer,
  Input,
  Label,
  TextArea,
} from "../../src/assets/UI";
import { requestApiGet, requestApiPost } from "../functions/request";

export default function Form({ setItems, items }) {
  const [toDo, setToDo] = useState({
    category: "",
    task: "",
    commentary: "",
    id: 0,
  });
  const url: string = "api/tasklist";

  useEffect(() => {
    requestApiGet(url).then((data) => setItems(data));
  }, [items.length > 0]);

  function createCategory(e) {
    setToDo({
      ...toDo,
      category: e.target.value,
      id: Math.round(Math.random() * 15685),
    });
  }
  function createTask(e) {
    setToDo({ ...toDo, task: e.target.value });
  }

  function createCommentary(e) {
    setToDo({ ...toDo, commentary: e.target.value });
  }

  async function createToDo(e) {
    e.preventDefault();

    const id = Math.round(Math.random() * 154587);

    await fetch(url, {
      method: "POST",

      body: JSON.stringify({
        category: toDo.category,
        task: toDo.task,
        commentary: toDo.commentary,
        id: id,
      }),
    });

    setToDo({ ...toDo, category: "", task: "", commentary: "" });

    const res = await fetch(url);
    const task = await res.json();

    setItems(task);
  }

  return (
    <FormContainer onSubmit={createToDo}>
      <Label htmlFor="category">
        Category
        <Input
         data-cy="input-category"
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
        data-cy="input-task"
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
         data-cy="textArea-commentary"
          placeholder="write something about it"
          id="commentary"
          cols={50}
          rows={5}
          value={toDo.commentary}
          onChange={createCommentary}
        ></TextArea>
      </Label>
      <ButtonSubmit type="submit"  data-cy="button-add">➕</ButtonSubmit>
    </FormContainer>
  );
}
