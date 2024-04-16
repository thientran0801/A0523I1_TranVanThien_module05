import './App.css';
import SignUp from "./pr1/SignUp";
import Validate from "./pr2/Validate";
import SignIn from "./pr3/SignIn";
import LoginFormik from "./pr4/LoginFormik";
import Router1 from "./pr5/Router1";
import Practice6 from "./pr6/Practice6";
//pr7
import {Routes, Route} from 'react-router-dom'
import Category7 from "./pr7/Category7";
import Product7 from "./pr7/Product7";
function App() {

  return (
      <div className="App">
        <h1>Practice 01:</h1>
        <SignUp/>
        <hr/>
        <h1>Practice 02:</h1>
        <Validate/>
        <hr/>
        <h1>Practice 03:</h1>
        <SignIn/>
        <hr/>
        <h1>Practice 04:</h1>
        <LoginFormik/>
        <hr/>
        <h1>Practice 05:</h1>
        <Router1/>
        <hr/>
        <h1>Practice 06:</h1>
        <Practice6/>
        <hr/>
        <h1>Practice 07:</h1>
        <Routes>
          <Route path="/" element={<Category7 />} />
          <Route path="/product" element={<Product7 />} />
        </Routes>
      </div>
  );
}

export default App;
