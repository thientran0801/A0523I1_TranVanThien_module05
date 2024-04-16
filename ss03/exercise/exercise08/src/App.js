import './App.css';
import React, {Component} from "react";

class App extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            studentList: [],
            form: {
                name: "",
                phone: "",
                email: "",
            },
            isValid: false,
            indexSelected: -1
        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return {form}
        }, () => this.checkInvalidForm())
    }
    checkInvalidForm = () => {
        const {name, phone, email} = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: Boolean(value)
        })
    }
    handleSubmit = () => {
        const {indexSelected, form, isValid, studentList} = this.state;
        if (isValid) {
            const newList = studentList
            if (indexSelected > -1) {
                newList[indexSelected] = form;
                this.setState({  
                    form: {
                        name: "",
                        phone: "",
                        email: ""
                    },
                    indexSelected: -1
                })
            } else {
                newList.push(
                    {
                        name: form.name,
                        phone: form.phone,
                        email: form.email
                    }
                );
                this.setState({
                    form: {
                        name: "",
                        phone: "",
                        email: ""
                    }
                })
            }
            this.setState(
                {
                    studentList: newList,
                    isValid: false
                }
            )
        }
    }
    handleDelete = (index) => {
        const {studentList} = this.state;
        const updatedList = [...studentList];
        updatedList.splice(index, 1);
        this.setState({studentList: updatedList});
    }
    handleSelect = (studentSelected) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: this.state.studentList.indexOf(studentSelected)
        })
    }

    render() {
        const {studentList, form} = this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={form.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="number" name="phone" value={form.phone} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={form.email} onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            studentList.map(s => (
                                <tr key={studentList.indexOf(s)}>
                                    <td>{s.name}</td>
                                    <td>{s.phone}</td>
                                    <td>{s.email}</td>
                                    <td>
                                        <button onClick={() => this.handleSelect(s)}>Edit</button>
                                        <button onClick={() => this.handleDelete(studentList.indexOf(s))}>Delete</button>

                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;
