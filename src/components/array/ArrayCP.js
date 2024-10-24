import React, { useState } from 'react';

const ArrayCP = ({ insertAtIndex, removeAtIndex }) => {
  const [insertIndex, setInsertIndex] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [removeIndex, setRemoveIndex] = useState('');

  const handleInsert = () => {
    if (insertValue && insertIndex) {
      insertAtIndex(Number(insertIndex), Number(insertValue));
      setInsertIndex('');
      setInsertValue('');
    }
  };

  const handleRemove = () => {
    if (removeIndex) {
      removeAtIndex(Number(removeIndex));
      setRemoveIndex('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={insertIndex}
          onChange={(e) => setInsertIndex(e.target.value)}
          placeholder="Index"
        />
        <input
          type="number"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
          placeholder="Value"
        />
        <button onClick={handleInsert}>Insert at Index</button>
      </div>
      <div>
        <input
          type="number"
          value={removeIndex}
          onChange={(e) => setRemoveIndex(e.target.value)}
          placeholder="Index"
        />
        <button onClick={handleRemove}>Remove at Index</button>

      </div>
    </div>

  );
};

export default ArrayCP;
