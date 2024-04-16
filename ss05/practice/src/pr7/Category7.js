import {useNavigate} from "react-router-dom"

export default function Category7() {
    let navigate = useNavigate();

    const sendDataToProduct = (event) => {
        navigate("/product", {state: {valueId: event.target.value}})
    }
    return (
        <div>
            <h2>Select a category: </h2>
            <select defaultValue="0" onChange={event => {
                sendDataToProduct(event)
            }}>
                <option value="0" disabled hidden>Choose your car</option>
                <option value="1">Mercedes</option>
                <option value="2">Audi</option>
                <option value="3">Yamaha</option>
                <option value="4">Honda</option>
            </select>
        </div>
    )
}