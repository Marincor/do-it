import { useEffect, useState } from "react";
import { BoxButtons, BoxList, ButtonFeatures, Table, Td, Tr } from "../../src/assets/UI";
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
            <BoxButtons>
            <ButtonFeatures onClick={doneOnClick}> done ✔ </ButtonFeatures>
            <ButtonFeatures onClick={deleteOnClick}>delete x</ButtonFeatures>
               </BoxButtons>
           
          </BoxList>
        );
      })}
    </Table>

    
  );
}
