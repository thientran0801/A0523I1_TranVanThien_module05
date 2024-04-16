import React,{useState} from "react";
import {Formik} from "formik";
import './MailForm.css';
import {toast} from 'react-toastify';

export default function MailForm() {
    const [form,setForm] = useState({});

    const changeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }
    const REGEX = /^[a-zA-Z0-9-+_]+@[a-zA-Z0-9-+]+.com$/;

    const validate = () => {
        const errors = {};
        if (!form.to) {
            errors.to = "Required"
        } else if (!REGEX.test(form.to)) {
            errors.to = "****@gmail.com"
        }
        if (!form.title) {
            errors.title = "Required"
        }
        if (!form.message) {
            errors.message = "Required"
        }
        if (!form.file) {
            errors.file = "Required"
        }
        return errors;
    }

    const submit = ({}) => {
        toast.success("Added (Data is valid ");
        setForm({
            to:"",
            title: "",
            message: "",
            file: ""
        })
    }

    return (
        <div>
            <h2>Mail form:</h2>
            <Formik initialValues={form}
                    onSubmit={submit}
                    validate={validate}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.to ? "custom-input-error" : ""}`}>
                            <label>To :</label>
                            <input name="to" value={form.to || ""} onChange={changeForm}/>
                            {errors.to && <span className="error">{errors.to}</span>}
                        </div>

                        <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                            <label>Title :</label>
                            <input name="title" value={form.title || ""} onChange={changeForm}/>
                            {errors.title && <span className="error">{errors.title}</span>}
                        </div>

                        <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Message :</label>
                            <textarea name="message" value={form.message} cols="50" onChange={changeForm}/>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>

                        <div className={`custom-input ${errors.file ? "custom-input-error" : ""}`}>
                            <input type="file" name="file" value={form.file} onChange={changeForm}/>
                            {errors.file && <span className="error">{errors.file}</span>}
                        </div>
                        <button type={"submit"}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}