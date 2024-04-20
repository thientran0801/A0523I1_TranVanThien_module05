import React, {Component} from "react";
import axios from "axios";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            list: []
        }
    }
    handleChange =(event) => {
        this.setState({task: event.target.value})
    }

    componentDidMount() {
        axios.get("http://localhost:3000/todos").then(res => {
            const data = res.data;
            // this.setState({list: data})
            this.setState({list: data.filter(item => item.completed === false && item.userId <2)})
        }).catch(err => {
            console.log(err)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newElement = {
            userId: 200,
            id: this.state.list.length + 1,
            title: this.state.task,
            completed: false
        }
        const newList = this.state.list;
        newList.push(newElement);
        this.setState({list: newList})
        this.setState({task: ""})
/*        axios(
            {
                method: "post",
                url: "https://jsonplaceholder.typicode.com/todos",
                data: {
                    userId: 200,
                    id: this.state.list.length + 1,
                    title: this.state.task,
                    completed: false
                }
            }
        ).then(res => {
            alert("added !")
        }).catch(err => {
            throw err;
        })*/
    }

    render() {
        const {task, list} = this.state;
        return (
            <div>
                <h2>Todo list</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="job" value={task} onChange={this.handleChange}/> <br/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {
                        list.map(job => (
                            <li key={job.id}>{job.title}---------{job.id}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList;