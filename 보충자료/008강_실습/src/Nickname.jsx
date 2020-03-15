import React, { useState } from "react";

const Nickname = () => {
  const [nickname, setNickname] = useState("");

  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "nickname":
        setNickname(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <input
          placeholder="nickname"
          value={nickname}
          onChange={onChange}
          name="nickname"
        />
      </div>
    </>
  );
};

export default React.memo(Nickname);
