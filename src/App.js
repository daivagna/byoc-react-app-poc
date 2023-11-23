import logo from './logo.svg';
import './App.css';
import * as FEAAS from "@sitecore-feaas/clientside/react";

import Button from './Components/Button.tsx'; // Import the Button component
import "./byoc/ExampleClientsideComponent.tsx";
import ExampleClientsideComponent from './byoc/ExampleClientsideComponent.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.licdn.com/dms/image/C4E03AQEd_NkbXA_llA/profile-displayphoto-shrink_200_200/0/1517726227744?e=1706140800&v=beta&t=qcI8TVPzEdTC0F8DO-1bPYw1x4mn29vZJuWDyY5pzVM" className="App-logo" alt="logo" />
        <p>
          Rotating D
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ExampleClientsideComponent />
        <Button /> 
        </a>
      </header>
    </div>
  );
}

export default App;

