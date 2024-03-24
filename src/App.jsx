import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      package: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handlerResetToInitial = () => {
    setItems(initialItems);
  };

  const handlerMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, package: true };
    });

    setItems(newItems);
  };

  const handlerMarkAllAsUnComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, package: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handlerResetToInitial={handlerResetToInitial}
          handlerMarkAllAsComplete={handlerMarkAllAsComplete}
          handlerMarkAllAsUnComplete={handlerMarkAllAsUnComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
