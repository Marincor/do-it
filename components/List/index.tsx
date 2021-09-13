import { useEffect, useState } from "react";
import {
  BoxButtons,
  BoxList,
  ButtonFeatures,
  Table,
  Td,
  Tr,
} from "../../src/assets/UI";
import { doneOnRender, doneOnClick } from "../functions/done";
import { deleteOnClick } from "../functions/request";

export default function List({ items, setItems }) {





  return (
    <Table>
      {items.map((item) => {
        return (
          <BoxList key={item.id} id={item.id}>
            <Tr>
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
