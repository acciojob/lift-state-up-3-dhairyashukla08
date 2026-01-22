import React, { useState } from "react";
import './../styles/App.css';

// Child Component 1
const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div className="child1">
      <h2>Child Component 1</h2>
      <button onClick={() => setSelectedOption('Option 1')}>Option 1</button>
    </div>
  );
};

// Child Component 2
const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div className="child2">
      <h2>Child Component 2</h2>
      <button onClick={() => setSelectedOption('Option 2')}>Option 2</button>
    </div>
  );
};

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 setSelectedOption={setSelectedOption} />
      <ChildComponent2 setSelectedOption={setSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
