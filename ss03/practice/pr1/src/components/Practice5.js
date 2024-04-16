import {Component} from "react";
class Practice5 extends Component{
    constructor(props) {
        super(props);
        this.state ={
            color: "red"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: this.state.color == "red"? "blue" : "red"})
        }, 2000)
    }
    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: 'auto'
                    }}
                />
            </div>
        )
    }
}
export default Practice5;