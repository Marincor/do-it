import { useEffect, useState } from "react";
import { Table, Td, Tr } from "../../src/assets/UI";

export default function List({items}) {


  return (
    <Table>
      {items.map((item) => {
        return (
          <Tr>
            <Td>{item.category}</Td>
            <Td>{item.task}</Td>
            <Td>{item.commentary}</Td>
          </Tr>
        );
      })}
    </Table>
  );
}
