import { useEffect, useState } from "react";
import { BoxList, Table, Td, Tr } from "../../src/assets/UI";
import deleteOnClick from "../functions/delete";
import { doneOnRender, doneOnClick } from "../functions/done";

export default function List({ items }) {
  const [thereIsOneDone, setThereIsOneDone] = useState([]);

  useEffect(() => {
    const vetorDone = JSON.parse(localStorage.getItem("Done"));

    setThereIsOneDone(vetorDone);
  }, []);

  // done //

  doneOnRender(thereIsOneDone);

  // delete //



  return (
    <Table>
      {items.map((item, i) => {
        return (
          <BoxList>
            <Tr key={i} id={item.id}>
              <Td>{item.category}</Td>
              <Td>{item.task}</Td>
              <Td>{item.commentary}</Td>
            </Tr>
            <button onClick={doneOnClick}>done</button>
            <button onClick={deleteOnClick}>delete</button>
          </BoxList>
        );
      })}
    </Table>
  );
}
