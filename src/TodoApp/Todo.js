import './Todo.css'
import { useState } from 'react';

const Todo = () => {

  const [newItem, setNewItem] = useState('')

  const [items, setItems] = useState([])

  const [todoEditing, setTodoEditing] = useState(null)

  const [editingText, setEditingText] = useState('')
  //add function
  function addItem() {

    if (!newItem) {
      alert('Enter something...')
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setItems(oldlist => [...oldlist, item])
    setNewItem('')
  }

  //delete function
  function deletItem(id) {
    const newArrey = items.filter(item => item.id !== id)
    setItems(newArrey)
  }

  function editTodo(id) {
    const updatedTodos = [...items].map((item) => {
      if (item.id == id) {
        item.value = editingText
      }
      return item
    })
    console.log('updatedTodos ', updatedTodos)
    setItems(updatedTodos)
    setTodoEditing(null)
    setEditingText('')
  }

  return (
    <div className='todo_app'>
      <h1 className='title'>Todo List</h1>
      <input type="text" placeholder='Enter your task...' onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button className='add_btn' onClick={() => addItem()} >Add</button>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value}
              {/* edit input */}
              {todoEditing == item.id ? (<input onChange={(e) => setEditingText(e.target.value)} value={editingText} />
              ) : (<span>{item.text}</span>
              )}

              <button className='delet_btn' type="" onClick={() => deletItem(item.id)}>&#10006;</button>
              {todoEditing == item.id ? (<button className='submit_edit' onClick={() => editTodo(item.id)}>submit edit</button>
              ) : (<button className='edit' onClick={() => {
                setEditingText(item.value)
                setTodoEditing(item.id)
              }}>edit</button>
              )}

            </li>
          )
        })}
      </ul>
      <h6 className='logo'>DESIGNED BY JAVID SHOJAEI</h6>
    </div>
  )

}

export default Todo;
