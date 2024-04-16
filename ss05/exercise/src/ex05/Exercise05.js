import {Routes, Route} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
export default function Exercise05() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}