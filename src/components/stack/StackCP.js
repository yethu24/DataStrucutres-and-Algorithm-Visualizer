import React, { useState } from 'react';

const StackCP = ({ push, pop }) => {
  const [value, setValue] = useState('');

  const handlePush = () => {
    if (value) {
      push(Number(value));
      setValue('');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <button onClick={handlePush}>Push</button>
      <button onClick={pop}>Pop</button>
    </div>
  );
};

export default StackCP;
