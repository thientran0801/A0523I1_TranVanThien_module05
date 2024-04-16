import React, {Component} from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: "",
            number2: "",
            result: "",
        };
    }

    handleNumber1 = (event) => {
        this.setState({number1: event.target.value});
    };
    handleNumber2 = (event) => {
        this.setState({number2: event.target.value});
    };
    cal = (operator) => {
        const {number1, number2} = this.state;
        if (number1 && number2) {
            try {
                this.setState({result: eval(number1 + operator + number2)});
            } catch (error) {
                this.setState({
                    result: "Error:\n number1 ornumber2 is not a number",
                });
            }
        }
    };

    render() {
        const {number1, number2, result} = this.state;
        return (
            <div>
                <h1>Exercise 01</h1>
                <hr/>
                <div
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        width: "15%",
                    }}
                >
                    <input type="text" value={number1} onChange={this.handleNumber1}/>
                    <br/>
                    <input type="text" value={number2} onChange={this.handleNumber2}/>
                    <br/>
                    <span style={{color: "red", textAlign: "left"}}>
          Result: {result}
        </span>{" "}
                    <br/>
                    <button onClick={() => this.cal("+")}>+</button>
                    <button onClick={() => this.cal("-")}>-</button>
                    <button onClick={() => this.cal("*")}>*</button>
                    <button onClick={() => this.cal("/")}>/</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
