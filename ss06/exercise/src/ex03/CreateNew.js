import React, {useEffect, useState} from "react";
import {Formik} from 'formik'
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom'

export default function CreateNew() {
    const [form, setForm] = useState({});
    const {state} = useLocation();
    const navigate = useNavigate();

    const change = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        if (state) {
            setForm(state)
        }
    }, [])

    const submit = (event) => {
        event.preventDefault();
        const method = state ? "put" : "post";
        const url = state ? `http://localhost:3000/phonebooks/${state.id}` : "http://localhost:3000/phonebooks";
        axios({
            method: method,
            url: url,
            data: form
        }).then(() => {
            navigate("/")
        }).catch(err => {
            console.log("loi roi :" + err)
        })
    }

    return (
        <div>
            <h2>{state ? "Edit contact" : "Add contact"}</h2>
            <Formik initialValues={form} onSubmit={submit}>
                <form onSubmit={submit}>
                    <label htmlFor="image">Add image address:</label><br/>
                    <input name="image" id="image" value={form.image || ""} onChange={change}/><br/>

                    <label htmlFor="name">Name</label><br/>
                    <input name="name" id="name" value={form.name || ""} onChange={change}/><br/>

                    <label htmlFor="email">Email</label><br/>
                    <input name="email" id="email" value={form.email || ""} onChange={change}/><br/>

                    <label htmlFor="phone">Phone</label><br/>
                    <input name="phone" id="phone" value={form.phone || ""} onChange={change}/><br/>
                    <button type="submit">{state ? "Update" : "Add"}</button>
                </form>

            </Formik>
        </div>
    )

}