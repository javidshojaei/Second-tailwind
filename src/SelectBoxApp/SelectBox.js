import { useState } from 'react';
import './SelectBox.css';

/* const SelectBox = () => {
  const [newItem, setNewItem] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Litre');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedWord, setEditedWord] = useState('');

  // Add function
  function addItem() {
    if (!newItem) {
      alert('Enter something');
      return;
    }

    const newItemObj = {
      id: Math.floor(Math.random() * 1000),
      word: newItem,
      unit: selectedUnit,
      value: 1, // Default value set to 1 for each item
    };

    setSelectedOptions(oldSelectedOptions => [...oldSelectedOptions, newItemObj]);
    setNewItem('');
  }

  // Selector
  const selectHandler = (e) => {
    setSelectedUnit(e.target.value);
  };

  // Delete function
  function deleteItem(id) {
    setSelectedOptions(oldSelectedOptions => oldSelectedOptions.filter(item => item.id !== id));
  }

  // Edit function
  function startEditing(id, word) {
    setEditingItemId(id);
    setEditedWord(word);
  }

  function cancelEditing() {
    setEditingItemId(null);
    setEditedWord('');
  }

  function saveEditing(id) {
    setSelectedOptions(oldSelectedOptions =>
      oldSelectedOptions.map(item => (item.id === id ? { ...item, word: editedWord } : item))
    );
    setEditingItemId(null);
    setEditedWord('');
  }

  // Increase and Decrease functions
  function increaseValue(id) {
    setSelectedOptions(oldSelectedOptions =>
      oldSelectedOptions.map(item => (item.id === id ? { ...item, value: item.value + 1 } : item))
    );
  }

  function decreaseValue(id) {
    setSelectedOptions(oldSelectedOptions =>
      oldSelectedOptions.map(item => (item.id === id ? { ...item, value: Math.max(1, item.value - 1) } : item))
    );
  }

  return (
    <div className="selectBoxApp">
      <h1>Select box app</h1>
      <select value={selectedUnit} onChange={selectHandler}>
        <option value="Litre">Litre</option>
        <option value="kg">kg</option>
        <option value="ton">ton</option>
        <option value="meter">meter</option>
        <option value="kilometer">kilometer</option>
      </select>
      <input onChange={(e) => setNewItem(e.target.value)} value={newItem} />
      <button onClick={addItem}>Add</button>
      <ul>
        {selectedOptions.map((item) => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <>
                <input type="text" value={editedWord} onChange={(e) => setEditedWord(e.target.value)} />
                <button className="unitBtn" onClick={() => saveEditing(item.id)}>Save</button>
                <button className="unitBtn" onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                <button className="unitBtn" onClick={() => deleteItem(item.id)}>Delete</button>
                <button className="unitBtn" onClick={() => startEditing(item.id, item.word)}>Edit</button>
                <button className="unitBtn" onClick={() => decreaseValue(item.id)}>-</button>
                {item.value} <button className="unitBtn" onClick={() => increaseValue(item.id)}>+</button> {item.unit} {item.word}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox; */


const SelectBoxApp = () => {

  const [item, setItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [selectedUnit, setSelectedUnit] = useState('--')

  // add item
  const addItem = () => {
    if (!item) {
      alert('input can not be empty')
      return
    }

    const items = {
      id: Math.floor(Math.random() * 1000),
      value: item,
      unit: selectedUnit
    }
    if (selectedUnit == '--') {
      alert('select a unit')
      return
    }
    setItemList((item) => [...itemList, items])
    setItem('')

  }
  const changeHandler = (e) => {
    setSelectedUnit(e.target.value)
  }

  return (
    <div className='SelectBoxApp'>
      <div className='' >
        <select className='selectBox' value={selectedUnit} onChange={changeHandler}>
          <option>--</option>
          <option>gram</option>
          <option>kilogeram</option>
          <option>liter</option>
          <option>meter</option>
        </select>
        <input className='input' value={item} onChange={e => setItem(e.target.value)} />
        <button className='addbtn' onClick={addItem} >Add</button>
      </div>
      <div>
        <ul>
          {itemList.map(item => {
            return (
              <li key={item.id}> ({item.unit}) {item.value} </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SelectBoxApp