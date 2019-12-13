import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import ActivityForm from './components/ActivityForm';

function App() {
  const [input, setInput] = useState('');
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);

  // handle input change 
  const handlechange = e => {
    setInput(e.target.value)
  }

  return (
    <div className='App container-fluid'>
      <h1>Apptivity</h1>
      <p>The Activity Tracker</p>
      <h1>00:00:00</h1>
      <ActivityForm onChange={handlechange} />
    </div>
  );
}

export default App;
