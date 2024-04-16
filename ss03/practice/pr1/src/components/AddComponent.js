//practice 2

/*import {Component} from "react";

class AddComponent extends Component {
    render(props) {
        return (
            <h2>Total: {this.props.firstNumber + this.props.secondNumber} </h2>
        )
    }
}*
 */
//practice 3
function AddComponent(props) {
return (
    <h1> Practice 2: Total: {props.firstNumber + props.secondNumber}</h1>
)
}

export default AddComponent;