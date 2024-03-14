import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  //! Sorting criterias
  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') {
    sortedItems = items.slice().
      sort((a, b) => a.description.localeCompare(b.localeCompare));
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }



  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => {
          return <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        })}
      </ul>

      {/* sorting */}
      <div className="actions">
        <select value={sortBy} onChange={evt => setSortBy(evt.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description (A-Z)</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  )
}