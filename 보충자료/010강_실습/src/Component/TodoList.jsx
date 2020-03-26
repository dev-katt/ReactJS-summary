import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const { todos, deleteTodo, editTodo } = props;
  const styleTodo = {
    marginTop: "1rem"
  };
  return (
    <div style={styleTodo}>
      {todos.map((td, i) => {
        return (
          <Todo
            todo={td}
            idx={i}
            key={i}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
