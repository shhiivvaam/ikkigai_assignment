import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import {useState} from 'react';


function App() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      <ChildComponent onMessageChange={handleMessageChange} />
    </div>
  );

}

export default App;
