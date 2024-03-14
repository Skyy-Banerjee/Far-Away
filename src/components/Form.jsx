import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(evt) {
      evt.preventDefault();
      if (!description) {
        alert('Please enter an item first! 🤷‍♂️');
        return;
      }
      const newItem = { description, quantity, packed: false, id: Date.now() };
      console.log(newItem);
      onAddItems(newItem);
      setDescription('');
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip? ✈️</h3>
        <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).
            map(num => {
              return <option value={num} key={num}>{num}</option>
            })
          }
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={evt => {
          setDescription(evt.target.value)
        }
        } />
        <button>Add</button>
      </form>
    )
  }