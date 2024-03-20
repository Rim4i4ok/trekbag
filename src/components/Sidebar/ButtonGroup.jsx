import Button from "../Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((item) => {
        return (
          <Button key={item} type="secondary">
            {item}
          </Button>
        );
      })}
    </section>
  );
}
