import './App.css';
import ToDoList from "./ex01/ToDoList";
import {BrowserRouter } from 'react-router-dom'
import Exercise02 from "./ex02/Exercise02";
import Exercise03 from "./ex03/Exercise03";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>Exercise 01:</h1>
                <ToDoList/>
                <hr/>
                <h1>Exercise 02:</h1>
                <Exercise02 />
                <h1>Exercise 03:</h1>
                <Exercise03 />
            </div>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
