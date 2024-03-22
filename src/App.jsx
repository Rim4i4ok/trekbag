import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
