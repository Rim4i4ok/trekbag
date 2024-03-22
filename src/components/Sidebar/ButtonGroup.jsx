import Button from "../Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handlerResetToInitial,
  handlerMarkAllAsComplete,
  handlerMarkAllAsUnComplete,
}) {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handlerMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handlerMarkAllAsUnComplete,
    },
    {
      text: "Reset to initial",
      onClick: handlerResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          buttonType="secondary"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
    </section>
  );
}
