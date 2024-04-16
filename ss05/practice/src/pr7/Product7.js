import {useLocation} from 'react-router-dom'
export default function Product7() {
    const {state} = useLocation();
return (
    <div>
        <h2>ID selected is {state.valueId}</h2>
    </div>
)
}