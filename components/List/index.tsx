import { useEffect, useState } from "react";
import { BoxButtons, BoxList, ButtonFeatures, Table, Td, Tr } from "../../src/assets/UI";
import deleteOnClick from "../functions/delete";
import { doneOnRender, doneOnClick } from "../functions/done";


export default function List({ items }) {
  const [thereIsOneDone, setThereIsOneDone] = useState([]);

  
  useEffect(() => {
   
    if (typeof window !== 'undefined') {

      const vetorDone:any = JSON.parse(localStorage.getItem("Done")) || [];
     
      setThereIsOneDone(vetorDone)

  }


  if(thereIsOneDone.length > 0) {

    doneOnRender(thereIsOneDone);
  }
  
 

   
  }, [thereIsOneDone.length > 0]);





  console.log(thereIsOneDone)






 
  function renderList() {

    if(items !== undefined && items !== null) {

    

        return (

          items.map((item, i) => {
            return (
              <BoxList  key={i}>
                <Tr id={item.id}>
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
          })

        )

    } else {

      return <h2>Ops, an error ocurred, reload the page!</h2>
    
    }


  }

  

  return (

   
<Table>
    {renderList()}
    </Table>

    
  );
}
