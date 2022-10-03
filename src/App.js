import logo from './logo.svg';
import { useState } from 'react';
import ChildComponet from './childComponet';

import './App.css';

function App() {

  const [ buttonClicked, setButtonClicked ] = useState(false);

  return (
    <div className="App">
      <h1 className='heading'>This is react!</h1>
      <button  onClick={() => setButtonClicked(!buttonClicked) } >Press Here!</button>
      {
        buttonClicked
        ? <p style={{ color: 'red', fontStyle: 'italic' }} >Button is clicked</p>
        : <div></div>
      }
      <ChildComponet buttonClicked={buttonClicked} />
    </div>
  );
}

export default App;
