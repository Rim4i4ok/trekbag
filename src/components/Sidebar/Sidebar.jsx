import { ItemsContext } from "../../contexts/ItemsContextProvider";
import { useItemsContext } from "../../lib/hooks";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const { handleAddItem } = useItemsContext(ItemsContext);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
