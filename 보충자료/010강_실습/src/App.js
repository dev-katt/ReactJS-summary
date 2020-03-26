import React, { useState } from "react";
import AddForm from "./Component/AddForm";
import TodoList from "./Component/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    "운동하기",
    "리액트를 다루는 기술 Ch10 공부하기",
    "병원 다녀오기"
  ]);

  const handleAdd = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = idx => {
    setTodos(todos.filter((td, i) => idx !== i));
  };

  const handleEdit = (idx, todo) => {
    setTodos([
      ...todos.slice(0, idx),
      todo,
      ...todos.slice(idx + 1, todos.length)
    ]);
  };

  const styleTitle = {
    background: "#F7DC6F",
    color: "gray",
    padding: "10px",
    textAlign: "center",
    fontSize: "2rem"
  };

  return (
    <>
      <div style={styleTitle}>To do list</div>
      <div>
        <AddForm addTodo={handleAdd} />
      </div>
      {todos.length === 0 ? (
        "일정이 없어요. 일정을 추가해주세요"
      ) : (
        <div>
          <TodoList
            todos={todos}
            deleteTodo={handleDelete}
            editTodo={handleEdit}
          />
        </div>
      )}
    </>
  );
};

export default App;
