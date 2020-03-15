import React, { useState } from "react";

const Name = props => {
  const { onHandleName } = props;
  const [name, setName] = useState("");

  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        onHandleName(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <input
          placeholder="name"
          value={name}
          onChange={onChange}
          name="name"
        />
      </div>
    </>
  );
};

export default React.memo(Name);
