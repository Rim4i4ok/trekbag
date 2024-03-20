export default function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item?.name}
      </label>
      <button>❌</button>
    </li>
  );
}
