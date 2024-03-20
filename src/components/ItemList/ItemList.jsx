import { useState } from "react";
import { initialItems } from "../../lib/constants";
import Item from "./Item";

export default function ItemList() {
  const [items] = useState(initialItems);
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}
