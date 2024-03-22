import Button from "../Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handlerResetToInitial,
  handlerMarkAllAsComplete,
  handlerMarkAllAsUnComplete,
}) {
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handlerMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handlerMarkAllAsUnComplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handlerResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
