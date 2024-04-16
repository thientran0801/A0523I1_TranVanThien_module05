import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Employee() {
    const navigate = useNavigate();
    const sentInf = (index) => {
        navigate("/detail", {state: employees[index]})
    }
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    return (
        <div>
            <h2>List Employee</h2>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((e, index) => (
                        <tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>
                                <button onClick={() => sentInf(index)}>View</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}