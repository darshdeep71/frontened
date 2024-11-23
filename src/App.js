import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/homepage';
import Submitted from './pages/submitted';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/done' element={<Submitted></Submitted>}></Route>
      </Routes>
      </BrowserRouter>

      {/* <Homepage></Homepage> */}
      {/* <Submitted></Submitted> */}

    </div>
  );
}

export default App;
