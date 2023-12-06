import React, { useState } from 'react';

function ChildComponent({ onMessageChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessageToParent = () => {
    onMessageChange(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message"
      />
      <button onClick={sendMessageToParent}>Send Message</button>
    </div>
  );
}

export default ChildComponent;
