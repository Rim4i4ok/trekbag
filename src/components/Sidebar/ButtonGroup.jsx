import { secondaryButtons } from "../../lib/constants";
import Button from "../Button";

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
