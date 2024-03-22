export default function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.package} /> {item?.name}
      </label>
      <button>❌</button>
    </li>
  );
}
