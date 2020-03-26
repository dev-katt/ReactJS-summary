import React, { useState } from "react";

const AddForm = props => {
  const { addTodo } = props;
  const [todo, setTodo] = useState("");

  const onChange = e => {
    const { name, value } = e.target;
    if (name === "todo") setTodo(value);
  };

  const handleAdd = newTodo => {
    addTodo(newTodo);
    setTodo("");
  };

  const styleParent = {
    width: "100%",
    display: "flex",
    marginTop: "10px",
    height: "2rem"
  };

  const styleInput = {
    width: "70%",
    paddingLeft: "1rem"
  };

  const styleButton = {
    width: "30%"
  };

  return (
    <div style={styleParent}>
      <input
        style={styleInput}
        name="todo"
        placeholder="할 일"
        value={todo}
        onChange={onChange}
      />
      <button
        style={styleButton}
        onClick={() => {
          handleAdd(todo);
        }}
      >
        submit
      </button>
    </div>
  );
};

export default AddForm;
