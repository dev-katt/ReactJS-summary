import React, { useState, useRef } from "react";

const Todo = props => {
  const { todo, deleteTodo, editTodo } = props;
  const [todoOne, setTodoOne] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);
  const chk = useRef(null);

  const onChange = e => {
    const { name, value } = e.target;
    if (name === "todoOne") setTodoOne(value);
  };
  const handleDelete = () => {
    const { idx } = props;
    deleteTodo(idx);
  };

  const handleEdit = () => {
    const { idx } = props;

    if (isEdit) {
      editTodo(idx, todoOne);
    }

    setIsEdit(!isEdit);
  };

  const styleParent = {
    display: "flex",
    marginTop: "0.5rem"
  };

  const styleInput = {
    width: "100%",
    height: "100%"
  };

  const styleTodo = {
    width: "100%"
  };

  const styleParentButton = {
    display: "flex"
  };
  const styleButton = {
    width: "100%"
  };

  const onCheck = e => {
    const { checked } = e.target;
    const node = chk.current;

    if (checked) {
      node.classList.add("done");
      console.log(node);
    } else {
      node.classList.remove("done");
      console.log(node);
    }
  };

  return (
    <div style={styleParent}>
      <input type="checkbox" onChange={onCheck} />
      <div style={styleTodo}>
        {isEdit ? (
          <input
            style={styleInput}
            name="todoOne"
            value={todoOne}
            onChange={onChange}
          />
        ) : (
          <div className="chk" ref={chk} id="chk">
            {todo}
          </div>
        )}
      </div>

      <div style={styleParentButton}>
        {isEdit ? (
          <button style={styleButton} onClick={handleEdit}>
            save
          </button>
        ) : (
          <button id="btnEdit" style={styleButton} onClick={handleEdit}>
            edit
          </button>
        )}
        <button style={styleButton} onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
