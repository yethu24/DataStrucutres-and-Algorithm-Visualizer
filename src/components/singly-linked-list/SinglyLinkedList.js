import React, { useState } from 'react';
import SinglyLinkedListCP from './SinglyLinkedListCP'
import './SinglyLinkedList.css';


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const NodeComponent = ({ value, isCurrent }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div
      style={{
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        backgroundColor: isCurrent ? 'lightgreen' : 'lightblue',
        border: isCurrent ? '2px solid green' : '1px solid black',
        minWidth: '50px',
        textAlign: 'center'
      }}
    >
      {value}
    </div>
    <span style={{ fontSize: '20px' }}>→</span>
  </div>
);

const SinglyLinkedList = () => {
  const [head, setHead] = useState(null);
  const [list, setList] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);

  const updateList = () => {
    const newList = [];
    let current = head;

    while (current !== null) {
        newList.push(current); // Push the node itself for reference
        current = current.next;
    }
    
    setList(newList); // Set the list to the newly created array
  };


  const insertAtHead = (value) => {
    const newNode = new Node(value);
    newNode.next = head;
    setHead(newNode);
    updateList();
  };


  const insertAtEnd = async (value) => {
    const newNode = new Node(value);
    
    if (!head) {
        // If the list is empty, set the new node as the head
        setHead(newNode);
        updateList();
        return;
    }

    let current = head;

    // Highlight the head node first
    setCurrentNode(current); 

    // Traverse through the list with a delay to visualize the current node
    while (current.next !== null) {
        // Move to the next node
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization
        current = current.next; // Update current to next node
        setCurrentNode(current); // Highlight the current node
    }

    // Now at the end of the list, insert the new node
    await new Promise((resolve) => setTimeout(resolve, 500)); // Delay before insertion
    current.next = newNode; // Update the last node's next to point to the new node
    setCurrentNode(null); // Clear the highlight after insertion
    updateList();
};

  

  const removeAtHead = async () => {
    if (!head) {
      console.log("List is empty");
      return;
    }
    
    setCurrentNode(head);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newHead = head.next;
    setHead(newHead);
    updateList(); // Update the list to reflect the removal
  };

  const removeAtEnd = async () => {
    if (!head) {
      console.log("List is empty");
      return;
    }
  
    if (head.next === null) {
      // Only one node in the list (the head), so we remove it
      setCurrentNode(head);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setHead(null);
      updateList();
      setCurrentNode(null);
      return;
    }
  
    let current = head;
    let prev = null;
    setCurrentNode(current); // Highlight the current node
  
    // Traverse to the last node
    while (current.next !== null) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay to visualize
      prev = current;
      current = current.next;
      setCurrentNode(current); // Highlight the current node
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    // At this point, `current` is the last node and `prev` is the second-to-last node
    prev.next = null; // Remove the last node
    setCurrentNode(null); // Clear the highlight after deletion
    updateList();
  };
  
  const insertAtIndex = async (value, index) => {
    const newNode = new Node(value);
  
    if (index < 0) {
      console.log("Index out of bounds");
      return;
    }
  
    if (index === 0) {
      // Insert at the head if index is 0
      insertAtHead(value);
      return;
    }
  
    let current = head;
    let currentIndex = 0;
    let prev = null;
  
    setCurrentNode(current); // Highlight the current node
  
    // Traverse to the index where we need to insert
    while (current !== null && currentIndex < index) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay to visualize
      prev = current;
      current = current.next;
      setCurrentNode(current); // Highlight the current node
      currentIndex++;
    }

    await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay to visualize
  
    // If we reach the end without hitting the index, it's out of bounds
    if (currentIndex !== index) {
      console.log("Index out of bounds");
      setCurrentNode(null); // Clear the highlight
      return;
    }
  
    // Insert the new node at the index
    prev.next = newNode;
    newNode.next = current;
    
    setCurrentNode(null); // Clear the highlight after insertion
    updateList(); // Update the list to reflect the insertion
  };
  
  const removeAtIndex = async (index) => {
    if (index < 0 || head === null) {
      console.log("Index out of bounds or list is empty");
      return;
    }
  
    if (index === 0) {
      // Remove the head if index is 0
      removeAtHead();
      return;
    }
  
    let current = head;
    let currentIndex = 0;
    let prev = null;
  
    setCurrentNode(current); // Highlight the current node
  
    // Traverse to the node just before the one we want to remove
    while (current !== null && currentIndex < index) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay to visualize
      prev = current;
      current = current.next;
      setCurrentNode(current); // Highlight the current node
      currentIndex++;
    }

    await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay to visualize
  
    // If we reach the end without hitting the index, it's out of bounds
    if (current === null || currentIndex !== index) {
      console.log("Index out of bounds");
      setCurrentNode(null); // Clear the highlight
      return;
    }
  
    // Remove the node at the index
    prev.next = current.next;
  
    setCurrentNode(null); // Clear the highlight after removal
    updateList(); // Update the list to reflect the removal
  };
  

  const renderList = () => {
    if (!head) {
        return <div>List is empty</div>;
    }

    const nodes = [];
    let current = head;
    let index = 0; // To maintain a unique index for each node

    while (current !== null) {
        nodes.push(
            <NodeComponent
                key={`${current.value}-${index}`} // Use a combination of value and index for uniqueness
                value={current.value}
                isCurrent={current === currentNode} // Highlight the current node
            />
        );
        current = current.next;
        index++; // Increment index for each node
    }

    // Adding the last arrow pointing to null
    nodes.push(
        <div key="null" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Null</span>
        </div>
    );

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Head →</span>
            {nodes}
        </div>
    );
  };



  return (
    <div>
      <h1>Singly Linked List Visualizer</h1>
  
      {/* Render the linked list */}
      <div className="visualizer-container">
        {renderList()}
      </div>
  
      {/* Control Panel for inserting nodes */}
      <div className="control-panel">
      <SinglyLinkedListCP 
        insertAtHead={insertAtHead}
        insertAtEnd={insertAtEnd}
        insertAtIndex={insertAtIndex}
        removeAtHead={removeAtHead}
        removeAtEnd={removeAtEnd}
        removeAtIndex={removeAtIndex}
      />
      </div>
    </div>
  );

}
  

export default SinglyLinkedList;
