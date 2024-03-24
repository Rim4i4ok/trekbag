import { useContext } from "react";
import Counter from "./Counter";
import Logo from "./Logo";
import { ItemsContext } from "../../contexts/ItemsContextProvider";

export default function Header() {
  const { items } = useContext(ItemsContext);

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
