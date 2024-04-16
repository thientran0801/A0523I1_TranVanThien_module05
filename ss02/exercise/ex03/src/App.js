import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
{/*      <header className="App-header">
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
      </header>*/}
      <div className="container">
        <div className="card">
          <div className="card--header" />
          <img
              className="avatar"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/323129763_852527732685535_7078847867659874262_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MZJXnzKcTOoAX8iaslk&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAslatlofNQjzCb5_PUgSXD_krTqUbKHU4sKiysOGBhTQ&oe=66120CF0"
              alt="avatar"
          />
          <div className="card--body">
            <div>
              <p className="text-header">Thiện Trần</p>
              <p className="text-sub">
                He was born in 1998 in Quang Tri province. Curently, he is working as a design engineer for an Australian construction company
              </p>
              <button className="btn third">Add friend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
