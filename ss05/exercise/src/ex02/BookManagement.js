import React, {useState} from "react";
import {Formik} from 'formik';
import 'bootstrap/dist/css/bootstrap.css';
import {toast} from "react-toastify";

export default function BookManagement() {
    const [bookList, setBookList] = useState([]);
    const [selected, setSelected] = useState(-1);
    const [form, setForm] = useState({});

    const validate = () => {
        let errors = {};
        if (!form.title) {
            errors.title = "Required !"
        }
        if (!form.number) {
            errors.number = "Required !"
        } else if (isNaN(form.number)) {
            errors.number = "Not a number !"
        }
        return errors;
    }

    const submit = () => {
        const newList = JSON.parse(JSON.stringify(bookList));
        if (selected > -1) {
            newList[selected] = form;
            toast.success("Updated")
        } else {
            newList.push(form);
            toast.success("Added")
        }
        setBookList(newList);
        setForm({})
        setSelected(-1)
    }

    const changeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    const handleSelected = (book, index) => {
        setForm(book);
        setSelected(index);
    };
    const handleDelete = (index) => {
        const newList = JSON.parse(JSON.stringify(bookList));
        newList.splice(index, 1)
        setBookList(newList);
        toast.success("Deleted")
    }

    return (
        <div>
            <h1>Library:</h1>
            <Formik
                initialValues={form}
                onSubmit={submit}
                validate={validate}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                            <label>Title</label> <br/>
                            <input name="title" value={form.title || ""} onChange={changeForm}/>
                            {errors.title && <span className="error">{errors.title}</span>}
                        </div>

                        <div className={`custom-input ${errors.number ? "custom-input-error" : ""}`}>
                            <label>Number</label><br/>
                            <input name="number" value={form.number || ""} onChange={changeForm}/>
                            {errors.number && <span className="error">{errors.number}</span>}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {bookList.map((b, index) => (
                    <tr key={index}>
                        <td>{b.title}</td>
                        <td>{b.number}</td>
                        <td>
                            <button onClick={() => handleSelected(b, index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}