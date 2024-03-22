import { useState } from "react";
import { initialItems } from "../../lib/constants";
import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}
