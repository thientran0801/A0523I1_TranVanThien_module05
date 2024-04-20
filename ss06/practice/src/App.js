import Practice02 from "./pr2/Practice02";
import Practice03 from "./pr3/Practice03";
import './App.css'
import Practice04 from "./pr4/Practice04";
import AsynAwait from "./pr5/AsynAwait";
import GetUserAndArticalByAxios from "./pr6/GetUserAndArticalByAxios";

function App() {
    return (
        <div className="App">
            <h1>Practice 02:</h1>
            <Practice02/>

            <hr/>
            <h1>Practice 03:</h1>
            <Practice03/>

            <hr/>
            <h1>Practice 04:</h1>
            <Practice04/>

            <hr/>
            <h1>Practice 05:</h1>
            <AsynAwait/>

            <hr/>
            <h1>Practice 06:</h1>
            <GetUserAndArticalByAxios/>
        </div>
    );
}

export default App;
