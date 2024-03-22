import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      package: false,
    };

    const newItems = [...items, newItem];
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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
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
