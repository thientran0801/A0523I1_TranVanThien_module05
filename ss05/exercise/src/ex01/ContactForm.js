import {useState} from "react";
import "./ex01.css"
import {Formik} from 'formik'

export default function ContactForm() {
    const [form, setForm] = useState({});
    const REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/*    const handleInput = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };*/

    const validate = (values) => {
        const loi = {};
        if (!values.email) {
            loi.email = "Required !!!";
        } else if (!REGEX.test(values.email)) {
            loi.email = "Invalid email address !!!!!!!";
        }
        if (!values.name) {
            loi.name = "Required !!!!";
        }
        if (!values.phone) {
            loi.phone = "Required !!!!";
        }
        if (!values.message) {
            loi.message = "Required !!!!";
        }

        return loi
    };

    const submitData = () => {
        alert("Login ok !!!");
    };

    return (
        <div>
            <h2>Contact form:</h2>
            <Formik
                // initialValues={{ name: "", email: "", phone: "", message: "" }}
                initialValues={form}
                validate={validate}
                onSubmit={submitData}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${
                                errors.name ? "custom-input-error" : ""
                            }`}
                        >
                            <span>Name  </span>
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div
                            className={`custom-input ${
                                errors.email ? "custom-input-error" : ""
                            }`}
                        >
                            <span>Email  </span>
                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div
                            className={`custom-input ${
                                errors.phone ? "custom-input-error" : ""
                            }`}
                        >
                            <span>Phone  </span>
                            <input
                                type="text"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>

                        <div
                            className={`custom-input ${
                                errors.message ? "custom-input-error" : ""
                            }`}
                        >
                            <span>Message  </span>
                            <input
                                type="text"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}