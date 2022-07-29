import React, { useEffect, useState } from 'react';
import Todos from './components/Todos';

function App() {
  const localStorageData = JSON.parse(localStorage.getItem('Tasks'));
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(localStorageData);

  const todoInput = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
    };
    setTodo('');
  };

  const deleteTodo = (id) => {
    const filteredItems = todos.filter((todoItem, index) => {
      return index !== id;
    });
    setTodos(filteredItems);
  };

  const updateTodo = (id) => {
    const filteredItem = todos.filter((todoItem, index) => {
      return index == id;
    });
    setTodo(filteredItem)
    deleteTodo(id);
  }

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-6 mx-auto bg-white rounded-4 p-3 mt-5'>
          <h1 className='text-center mb-4'>My Todos React App</h1>
          <div className='d-flex gap-4 mb-4'>
            <input
              type='text'
              name='add-todo' 
              className='form-control shadow-none text-capitalize'
              placeholder='Enter new todo'
              value={todo}
              onChange={todoInput} />
              <button onClick={addTodo} className='btn btn-warning px-3 fw-bold shadow-none'>Add</button>
          </div>
          <ul className='list-group'>
            {
              todos.map((todoItem, index) => {
                return <Todos todoItem={todoItem} key={index} id={index} deleteTodo={deleteTodo} updateTodo={updateTodo} />;                
              })
            }
          </ul>
        </div>
      </div>      
    </div>
  );
}

export default App;
