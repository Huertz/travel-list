/* eslint-disable react/prop-types */
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Socks', quantity: 12, packed: true },
];

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <span>X</span>
    </li>
  );
}

export default function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <Item
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
