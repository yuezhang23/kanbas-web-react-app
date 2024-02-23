import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
          <Routes>
              <Route path='/' element={<Navigate to ={'/Labs'} />}></Route>
              <Route path='/Labs/*' element={<Labs/>}></Route>
              <Route path='/Kanbas/*' element={<Kanbas/>}></Route>
              <Route path='/Hello' element={<HelloWorld/>}></Route>
          </Routes>
      </div>
    </HashRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
