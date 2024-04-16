import {useLocation} from 'react-router-dom';

export default function Home() {
    let {state} = useLocation();
    return (
        <div>
            <h4>Email: {state.form.email}</h4>
            <h4>Password: {state.form.password}</h4>
        </div>
    )
}