import './App.css';
import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import Practice4 from "./components/Practice4";
import Practice5 from "./components/Practice5";
import Practice6 from "./components/Practice6";
import React, {Component} from "react";
import Home from "./components/Home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            isLoggedIn: false
        }
    }

    delete = () => {
        this.setState({display: false});
    }

    //practice 06

    handleLogin = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogOut = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        let comp;
        let pr7;
        if (this.state.display) {
            comp = <Practice6/>;
        }

        if (this.state.isLoggedIn) {
            pr7 = <Home heading = "Welcome" inOut = {this.handleLogOut} nameButton = "Log out"/>
        } else {
            pr7 = <Home heading = "Please log in" inOut = {this.handleLogin} nameButton = "Log in"/>
        }
        ;

        return (

            <div style={{textAlign: "center"}}>
                <h1>Practice 1</h1>
                <Welcome name="Thiện Trần"/>
                <hr/>
                <h1>Practice 2</h1>
                <AddComponent firstNumber={20} secondNumber={25}/>
                <hr/>
                <h1>Practice 3</h1>
                <Practice4/>
                <hr/>
                <h1>Practice 4</h1>
                <Practice5/>
                <hr/>
                {comp}
                <button onClick={this.delete}>Delete the component</button>
                <hr/>
                <h2>Practice 7:</h2>
                {pr7}
            </div>
        )
    }
}

export default App;
