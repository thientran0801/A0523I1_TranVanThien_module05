import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import axios from "axios";

export default function CreateBook() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setForm(state)
        }
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!state) {
            axios.post("http://localhost:3000/books", form)
                .then(() => {
                    navigate("/")
                })
        }else {
            axios.put(`http://localhost:3000/books/${state.id}`, form)
                .then(() => {
                    navigate("/")
                })
        }

    }

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    return (
        <div>
            <h3>Add a new book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label><br/>
                <input id="title" name="title" value={form.title || ""} placeholder="Enter title of book "
                       onChange={handleChange}/><br/>
                <label htmlFor="quantity">Quantity</label><br/>
                <input id="quantity" type="number" value={form.quantity || ""} name="quantity"
                       onChange={handleChange}/><br/>
                <br/>
                <button className="btn btn-success" type={"submit"}>Save</button>
            </form>
        </div>
    )

}