import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";


function App() {
  const [items, setItems] = useState([]);

  //add item fx
  function handleAddItems(item) {
    setItems(items => {
      return [...items, item];
    })
  }

  //delete fx
  function handleDeleteItem(itemId) {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
  }

  //toggle CheckBox fx
  function handleToggleItem(itemId) {
    setItems(items => items.map(item => item.id === itemId ? { ...item, packed: !item.packed } : item));
  }

  //clearing items fx
  function handleClearItems() {
    if (items.length > 0) {
      const confirmed = window.confirm('Are you sure you want to delete all items? ⚠️');
      if (confirmed) setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
  )
}

export default App;
