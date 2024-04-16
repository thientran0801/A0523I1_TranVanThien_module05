import {Routes, Route, Link} from "react-router-dom"
import Contract from "./Contract";
import About from "./About";
import Home from "./Home";
export default function Router1() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contract">Contract</Link>
                </li>
            </ul>
<hr/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contract" element={<Contract />} />
            </Routes>
        </div>
    )
}
