import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <>
            <h1>Browser infomation:</h1>
            <h3 color={"red"}>Browser's details: {navigator.userAgent}</h3>
        </>
        /*    <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>*/
    );
}

export default App;
