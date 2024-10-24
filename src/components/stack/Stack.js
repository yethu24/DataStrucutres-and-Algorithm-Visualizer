import React, { useState } from 'react';
import StackCP from './StackCP';
import './Stack.css';

const Stack = () => {
  const [stack, setStack] = useState([]);

  const push = (value) => {
    const newStack = [...stack, value];
    setStack(newStack);
  };

  const pop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    }
  };

  return (
    <div>
      <h1>Stack Visualizer</h1>
      <StackCP push={push} pop={pop} />
      <div className="stack-container">
        {stack.map((value, index) => (
          <div key={index} className="stack-element">{value}</div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
