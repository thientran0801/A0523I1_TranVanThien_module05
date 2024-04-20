import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import './BookManagement.css';
import { useNavigate} from 'react-router-dom'


export default function BookManagement() {
    const [listBook, setListBook] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/books")
            .then(res => setListBook(res.data))
            .catch(err => {
                throw err;
            })
    }, [])

    const showFormCreate = (event) => {
        event.preventDefault();
        navigate("/create")
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                axios.get("http://localhost:3000/books")
                    .then(res => {
                        setListBook(res.data)
                    }).catch(err => {
                    console.log(err)
                })
            })
    }

    const handleUpdate = (book) => {
        navigate("/create", {state: book})
    }
    return (
        <div>
            <h1>Library</h1>
            <button className="btn btn-success" onClick={showFormCreate}>Add a new book</button>
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    listBook.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleUpdate(book)}>Edit
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => handleDelete(book.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}