import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Array from './components/array/Array';
import Stack from './components/stack/Stack';
import Queue from './components/queue/Queue';
import SinglyLinkedList from './components/singly-linked-list/SinglyLinkedList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/array" element={<Array />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/singly-linked-list" element={<SinglyLinkedList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;