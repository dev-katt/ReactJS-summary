import React, { useState } from "react";
import Nickname from "./Nickname";
import Name from "./Name";

const App = () => {
  const [parentName, setParentName] = useState("parentName");

  const handleParentName = newName => {
    setParentName(newName);
  };

  return (
    <div>
      <Name onHandleName={handleParentName} />
      <Nickname />
      <h3>{parentName}</h3>
    </div>
  );
};

export default App;
