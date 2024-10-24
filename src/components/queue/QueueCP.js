import React, { useState } from 'react';

const QueueCP = ({ enqueue, dequeue }) => {
  const [value, setValue] = useState('');

  const handleEnqueue = () => {
    if (value) {
      enqueue(Number(value));
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
      <button onClick={handleEnqueue}>Enqueue</button>
      <button onClick={dequeue}>Dequeue</button>
    </div>
  );
};

export default QueueCP;
