import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DateAndTime from "./components/DateAndTime";

const name = "Tran Van Thien";
const listFruit =['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

const root = ReactDOM.createRoot(document.getElementById('root'));
const jump = () => {
    root.render(
        <>
            <h1 style={{textAlign: "center"}}>Pro : {name} </h1>
            <ul>
                {
                    listFruit.map((a) => (
                        <li>{a}</li>
                    ))
                }
            </ul>

            {/*        <React.StrictMode>
            <App/>
        </React.StrictMode>*/}
            {/*React.createElement("h1", {style: {textAlign: "center"}}, name)*/}
            <DateAndTime/>
        </>
    );
}
setInterval(jump, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
