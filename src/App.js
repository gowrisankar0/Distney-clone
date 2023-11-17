import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Header from './Components/Header';

const App = () => {
  return (
    <Router>
      <Header />
     <Routes>

        <Route exact path="/" element={<Login />} />
     </Routes>




    </Router>
  )
}

export default App