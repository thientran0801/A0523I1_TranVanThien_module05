import {useLocation} from 'react-router-dom'

export default function Detail() {
    const {state} = useLocation();
    return (
        <div>
            <h3>Employee detail </h3>
            <p>ID: {state.id}</p>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
        </div>
    )
}