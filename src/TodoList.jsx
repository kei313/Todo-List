import React, { useState } from 'react';

function TodoList() {                                     //usestate hook
  const [todos, setTodos] = useState([]);                 //array of todos
  const [inputValue, setInputValue] = useState('');       // value of input entered

  const handleInputChange = (event) => {                  // input change / update inputValue
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {                   // when pressed submit
    event.preventDefault();                               // prevents page reload
    if (!inputValue.trim()) {                             // check if empty
      return;
    }
    const newTodo = {                                     // for spread ope - input & if checked
      text: inputValue,                             
      checked: false
    };
    setTodos([...todos, newTodo]);                  
    setInputValue('');                                    // inputValue to empty
  };

  const handleTodoDelete = (index) => {                   // when pressed delete
    const newTodos = [...todos];                          // duplicate todos
    newTodos.splice(index, 1);                            // remove selected
    setTodos(newTodos);                                   // update todos
  };

  const handleTodoToggle = (index) => {                   // onChange check/uncheck
    const newTodos = [...todos];                          // dupli todos
    newTodos[index].checked = !newTodos[index].checked;   // update selected todos check value
    setTodos(newTodos);                                   // update todos
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>                                                          {/* form submit - add todos */}
        <input type="text" value={inputValue} onChange={handleInputChange} />                     {/* sets input value */}
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (                                                             //output todos
          <li key={index}>       
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleTodoToggle(index)}
            />
            <span style={todo.checked ? { textDecoration: 'line-through' } : null}>               {/* if checked add style line-through */} 
              {todo.text}
            </span>
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
