import { useRef, useState } from "react";
import Button from "../Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Empty value");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      package: false,
    };
    setItems((prev) => [...prev, newItem]);

    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
        ref={inputRef}
      />
      <Button>Add to list</Button>
    </form>
  );
}
