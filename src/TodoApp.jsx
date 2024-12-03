import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load todos from local storage 
  useEffect(() => {
    console.log("Initial todos based on local storage")
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Update local storage whenever todos state changes
  useEffect(() => {
    console.log("useEffect based on todos",todos)
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { title, description } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { title,description}]);
    }
    setTitle('');
    setDescription('');
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((x, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h3>Todo App</h3>
      <hr />
      <h4>UseEffect Hook and UseState Hook</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

    <hr />
     
      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.length>0 && todos.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoApp;