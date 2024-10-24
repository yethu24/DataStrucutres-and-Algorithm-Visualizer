import React, { useState } from 'react';

const SinglyLinkedListCP = ({ insertAtHead, insertAtEnd, insertAtIndex, removeAtHead, removeAtEnd, removeAtIndex }) => {
  const [inputValue, setInputValue] = useState('');
  const [index, setIndex] = useState('');

  // Handle value changes for input fields
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleIndexChange = (e) => {
    setIndex(e.target.value);
  };

  // Clear input fields after operation
  const clearInputs = () => {
    setInputValue('');
    setIndex('');
  };

  return (
    <div className="control-panel">
      <h2>Control Panel</h2>

      {/* Input for node value */}
      <div>
        <input
          type="number"
          value={inputValue}
          placeholder="Enter value"
          onChange={handleInputChange}
        />
      </div>

      {/* Buttons for insertion */}
      <div>
        <button onClick={() => { insertAtHead(inputValue); clearInputs(); }} disabled={!inputValue}>
          Insert at Head
        </button>

        <button onClick={() => { insertAtEnd(inputValue); clearInputs(); }} disabled={!inputValue}>
          Insert at End
        </button>
      </div>

      {/* Input for index-based insertion */}
      <div>
        <input
          type="number"
          value={index}
          placeholder="Enter index"
          onChange={handleIndexChange}
        />
        <button onClick={() => { insertAtIndex(inputValue, parseInt(index)); clearInputs(); }} disabled={!inputValue || index === ''}>
          Insert at Index
        </button>
      </div>

      {/* Buttons for deletion */}
      <div>
        <button onClick={() => { removeAtHead(); }} >
          Remove Head
        </button>

        <button onClick={() => { removeAtEnd(); }} >
          Remove End
        </button>

        <button onClick={() => { removeAtIndex(parseInt(index)); clearInputs(); }} disabled={index === ''}>
          Remove at Index
        </button>
      </div>
    </div>
  );
};

export default SinglyLinkedListCP;
