import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Formik} from "formik";
import './ex05.css'

export default function Login() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const sentInf = () => {
        navigate("/home", {state: {form}})
    }


    const validate = () => {
        let errors = {};
        if (!form.email) {
            errors.email = "required"
        } else if (form.email !== "admin@gmail.com") {
            errors.email = "Email wrong"
        }
        ;

        if (!form.password) {
            errors.password = "required"
        } else if (form.password !== "letmein") {
            errors.password = "Please re-enter password"
        }
        ;
        return errors;
    }

    return (
        <div>
            <Formik initialValues={form}
                    onSubmit={sentInf}
                    validate={validate}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input type="text" name="email" value={form.email} onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>

                        <div className={`custom-input ${errors.password ? "custom-input-error" : ""}`}>
                            <label>Password</label>
                            <input type="password" name="password" value={form.password}
                                   onChange={handleChange}/>
                            <p className="error">{errors.password}</p>
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )

}