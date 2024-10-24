import React, { useState } from 'react';
import './Array.css';
import ArrayCP from './ArrayCP';

const Array = () => {
    const [array, setArray] = useState([10, 20, 30]);

    const insertAtIndex = (index, value) => {
        const newArray = [...array];
        if (index >= 0 && index <= newArray.length) {
          newArray.splice(index, 0, value);  
          setArray(newArray);
        }
     };    

     const removeAtIndex = (index) => {
        const newArray = [...array];
        if (index >= 0 && index < newArray.length) {
          newArray.splice(index, 1);  
          setArray(newArray);
        }
      };

      return (
        <div>
          <h1 className='title'>Array Visualizer</h1>
          <ArrayCP insertAtIndex={insertAtIndex} removeAtIndex={removeAtIndex} />
          <div className="array-container">
            {array.map((value, index) => (
              <div key={index} className="array-element">{value}</div>
            ))}
          </div>
        </div>
      );
    };

export default Array;