import './SignUp.css'
import {useState} from "react";

export default function SignUp() {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    };
    const handleSubmit = (event) => {
        const isValid = form.username && form.email && form.pass && form.confirmPassword;

        if (isValid) {
            if (form.pass === form.confirmPassword) {
                alert("Sign success !");
            }else {
                alert("You need confirm password again @_@")
            }
        } else
            alert("Please fill out all the fields !!!")
            // alert(isValid ? "Sign in success !" : "Please fill out all the field or confirm !!!")
    };
    return (
        <div>
            <h2> Sign up:</h2>
            <form>
                <div className="custom-input">
                    <label>Username:</label>
                    <input name="username" value={form.username || ""} onChange={handleChange}/>
                </div>

                <div className="custom-input">
                    <label>Email:</label>
                    <input name="email" value={form.email || ""} onChange={handleChange}/>
                </div>

                <div className="custom-input">
                    <label>Password:</label>
                    <input type="password" name="pass" value={form.pass || ""} onChange={handleChange}/>
                </div>

                <div className="custom-input">
                    <label>Confirm password:</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword || ""}
                           onChange={handleChange}/>
                </div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}