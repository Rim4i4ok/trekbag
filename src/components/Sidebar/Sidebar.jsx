import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handlerResetToInitial,
  handlerMarkAllAsComplete,
  handlerMarkAllAsUnComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handlerResetToInitial={handlerResetToInitial}
        handlerMarkAllAsComplete={handlerMarkAllAsComplete}
        handlerMarkAllAsUnComplete={handlerMarkAllAsUnComplete}
      />
    </div>
  );
}
