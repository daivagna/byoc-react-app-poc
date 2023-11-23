import logo from './logo.svg';
import './App.css';
import * as FEAAS from "@sitecore-feaas/clientside/react";

import Button from './Components/Button.tsx'; // Import the Button component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        {/* <FEAAS.ExternalComponentBundle />x */}
        <Button /> 
        </a>
      </header>
    </div>
  );
}

export default App;

