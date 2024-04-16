import {useState} from "react";

export default function SignIn() {
    const MESSAGE_ERROR = {
        email: "Email error !!!",
        password: "Password error !!!"
    }
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }

    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
        setForm({...form, [event.target.name]: {value: [event.target.value], error: error}});
    }
    const handleSubmit = () => {
        const isField = form.email && form.email.value && form.password && form.password.value;
        const isError = isField && (form.email.error || form.password.error);
        alert(isField && !isError ? "Login in successfully !!!" : "please fill out all the fields !!!!")
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}>
                    <labeL>Email:</labeL>
                    <input name="email" value={(form.email && form.email.value) || ""} onChange={handleChange}/>
                    {form.email && form.email.error && (
                        <p className="error">Email error</p>
                    )}
                </div>

                <div className={`custom-input ${form.password && form.password.error && "custom-input-error"}`}>
                    <label>Password:</label>
                    <input type="password" name="password" value={(form.password && form.password.value) || ""}
                           onChange={handleChange}/>
                    {form.password && form.password.error && (
                        <p className="error">Password error !!!</p>
                    )}
                </div>

                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
