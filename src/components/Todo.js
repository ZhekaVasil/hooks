import React, {useState} from 'react';
import axios from 'axios';

const todo = props => {
  const [todoName, setTodoName] = useState('Hello Eugene');
  const [todoList, setTodoList] = useState([]);

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value)
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName));
    axios.post('todos.json', {
      name: todoName
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="button" onClick={todoAddHandler}>Add</button>
      <ul>
        {
          todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </React.Fragment>
  )
};

export default todo;