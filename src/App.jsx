import { useState } from "react";
import "./App.css";
// import Register from './components/Register';
import UsersContainer from './components/Render';
import TotalPriceRender from "./components/TotalPrice";

function App() {
  // const [users, setUser] = useState([]);
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Register setUser={setUser}/> */}
        <TotalPriceRender fruits={fruits}/>
        <UsersContainer setFruits={setFruits} fruits={fruits}/>
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
      </header>
    </div>
  );
}

export default App;
