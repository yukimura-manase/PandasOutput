import React from 'react';

import { Home } from "./Home";
import { Register } from "./Register";
import { Login } from "./Login";

import { Main } from "./Main";

import { Nav } from "./Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./Style.css";

const App = () => {

  return (
    <div className="App">
      <Router>

      <header className="App-Header">
        <h1>Pandas I/O</h1>
        <Nav/>
      </header>

        {/* Routes によるルーティングで、パスが指定された場合に登録コンポーネントが表示される！ */}
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
        </Routes>


        <footer className="App-Footer">
          <p className='Footer-Msg'>© 2022 Pandas I/O</p>
        </footer>

      </Router>
    </div>
  );
}


export default App;