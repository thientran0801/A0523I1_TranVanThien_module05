import './App.css';
import ContactForm from "./ex01/ContactForm";
import BookManagement from "./ex02/BookManagement";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MailForm from "./ex03/MailForm";
import MedicalForm from "./ex04/MedicalForm";
import Exercise05 from "./ex05/Exercise05";
import Exercise06 from "./ex06/Exercise06";

function App() {
    return (
        <div className="App">
            <h1>Exercise: 01</h1>
            <ContactForm/>
            <hr/>
            <h1>Exercise: 02</h1>
            <BookManagement/>
            <hr/>
            <h1>Exercise: 03</h1>
            <MailForm/>
            <hr/>
            <h1>Exercise: 04</h1>
            <MedicalForm/>
            <hr/>
            <h1>Exercise: 05</h1>
            <Exercise05/>
            <hr/>
            <h1>Exercise 06:</h1>
            <Exercise06 />
            <ToastContainer/>
        </div>
    );
}

export default App;
