import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './ex03.css'
import {toast} from "react-toastify";

export default function PhoneBook() {
    const [listContact, setListContact] = useState([])
    const navigate = useNavigate();
    const handleCreate = () => {
        navigate("/contact/add")
    }

    useEffect(() => {
        axios.get("http://localhost:3000/phonebooks")
            .then(res => {
                setListContact(res.data)
            })
            .catch(err => {
                throw err
            })
    })

    const edit = (contact) => {
        navigate("/contact/add", {state: contact})
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/phonebooks/${id}`)
            .then(() => {
                axios.get("http://localhost:3000/phonebooks").then(res => {
                    setListContact(res.data)
                }).then(()=> {
                    toast.success("Deleted")
                }).catch(err => {
                    console.log("loi delete" + err)
                })
            })
    }

    return (
        <div>
            <h2>Contact</h2>
            <button className="btn btn-success" onClick={handleCreate}>Add contact</button>

            <table className="table table-hover  table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    listContact.map(c => (
                        <tr key={c.id}>
                            <td><img src={c.image} alt="avt"/> {c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={() => edit(c)}>Edit</button>
                                <button type="button" className="btn btn-danger" onClick={() => {handleDelete(c.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}