import "./Validate.css"
import {useState} from "react";

export default function Validate() {
    const [form, setForm] = useState({})

    const MESSAGE_ERROR = {
        username: "username error",
        email: "Email error",
        password: "Password error",
        confirmPassword: "Password must be the same"
    };
    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z]+$/
        // password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };

    function handleChange(event) {
        let error = "";
        if (event.target.name === "password") {
            if (form.confirmPassword && form.confirmPassword.value) {
                error = event.target.name === form.confirmPassword.value ? "" : MESSAGE_ERROR[event.target.name];
            } else {
                error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
            }
        } else if (event.target.name === "confirmPassword") {
            error = event.target.value === form.password.value ? "" : "Please confirm again !!!";
        } else {
            error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
        }
        setForm({...form, [event.target.name]: {value: event.target.value, error: error}})
    }
    function handleSubmit() {
        const isField = form.username && form.username.value && form.email && form.email.value &&
            form.password && form.password.value && form.confirmPassword && form.confirmPassword.value;
        const isError = isField && (form.username.error || form.email.error || form.password.error || form.confirmPassword.error);
        alert(isField && !isError ? "Sign up successfully !!!" : "please fill out all the fields !!!")
    }
    return (
        <div>
            <h2>Sign up:</h2>
            <form>
                <div className={`custom-input ${form.username && form.username.error && "custom-input-error"}`}>
                    <label>Username</label>
                    <input name="username" value={(form.username && form.username.value) || ""}
                           onChange={handleChange}/>
                    {
                        form.username && form.username.error && (
                            <p className="error">{form.username.error}</p>
                        )
                    }
                </div>
                <div className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}>
                    <label>Email</label>
                    <input name="email" value={(form.email && form.email.value) || ""}
                           onChange={handleChange}/>
                    {
                        form.email && form.email.error && (
                            <p className="error">{form.email.error}</p>
                        )
                    }
                </div>
                <div className={`custom-input ${form.password && form.password.error && "custom-input-error"}`}>
                    <label>Password</label>
                    <input type="password" name="password" value={(form.password && form.password.value) || ""}
                           onChange={handleChange}/>
                    {
                        form.password && form.password.error && (
                            <p className="error">{form.password.error}</p>
                        )
                    }
                </div>

                <div
                    className={`custom-input ${form.confirmPassword && form.confirmPassword.error && "custom-input-error"}`}>
                    <label>Confirm password</label>
                    <input type="password" name="confirmPassword"
                           value={(form.confirmPassword && form.confirmPassword.value) || ""}
                           onChange={handleChange}/>
                    {
                        form.confirmPassword && form.confirmPassword.error && (
                            <p className="error">{form.confirmPassword.error}</p>
                        )
                    }
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
