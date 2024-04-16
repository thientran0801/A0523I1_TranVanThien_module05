import {Routes, Route} from 'react-router-dom'
import Login from "./Login";
import Employee from "./Employee";
import Detail from "./Detail";

export default function Exercise06() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/employee" element={<Employee/>}/>
        </Routes>
    )
}