import React, {Component} from "react";
class ToDoList extends Component{
    constructor(prop) {
        super(prop);
        this.state = {
            list: [],
            item: ""
        }
    }
    handleInput = (event) => {
        this.setState({item: event.target.value})
    }
    handle = (event) => {
        const {list, item} = this.state;
        event.preventDefault();
        this.setState({list: [...list, item]})
        }
    render() {
        let {list} = this.state;
        return (
            <div>
                <h1>To di list:</h1>
                <hr/>
                <p>To do list: {list.map((s) => (
                   <span> {s}</span>
                ))}</p>
                <form>
                    <input type="text" onChange={(event => this.handleInput(event))}/>
                    <button onClick={this.handle}>Add</button>
                </form>
            </div>
        )
    }

}
export default ToDoList;

