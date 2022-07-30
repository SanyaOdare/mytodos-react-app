import React from 'react'

const Todos = ({ todos, setTodos, setEditTodo }) => {
  // Handle Completed Todo
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  // Handle Edit
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  // Handle Delete
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input 
            type="text"
            value={todo.title} 
            className={`list ${todo.completed ? "complete" : "" }`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button 
              className="complete-button"
              onClick={() => handleComplete()}>
                <i className='fa fa-check-circle'></i>
            </button>
            <button 
              className="edit-button"
              onClick={() => handleEdit(todo)}>
                <i className='fa fa-edit'></i>
            </button>
            <button 
              className='delete-button' 
              onClick={handleDelete(todo)}>
                <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}      
    </div>
  );
};

export default Todos;