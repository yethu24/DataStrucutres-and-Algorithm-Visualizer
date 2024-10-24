import React, { useState } from 'react';
import QueueCP from './QueueCP';
import './Queue.css';


const Queue = () => {
  const [queue, setQueue] = useState([10, 20, 30]);

  const enqueue = (value) => {
    const newQueue = [...queue, value];
    setQueue(newQueue);
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      newQueue.shift();
      setQueue(newQueue);
    }
  };

  return (
    <div>
      <h1>Queue Visualizer</h1>
      <QueueCP enqueue={enqueue} dequeue={dequeue} />
      <div className="queue-container">
        {queue.map((value, index) => (
          <div key={index} className="queue-element">{value}</div>
        ))}
      </div>
    </div>
  );
};

export default Queue;
