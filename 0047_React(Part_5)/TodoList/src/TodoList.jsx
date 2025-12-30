import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    {
      task: "sample-task",
      id: uuidv4(),
      isDone: false,
    },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4() ,isDone:false}];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDoneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h4>TodoList</h4>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks to do :</h4>
      <ul>
        {/* to render something in react array, we will always use  */}
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTask(todo.id)}>delete</button>
            <button onClick={() => markAsDoneOne(todo.id)}>
              Mark as done one
            </button>
          </li>
        ))}
      </ul>

      <button onClick={markAsDoneAll}>Mark as done All</button>
    </div>
  );
}
