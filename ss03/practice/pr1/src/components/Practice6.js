import React, {Component} from "react";

class Practice6 extends Component {

    componentWillUnmount() {
        alert("The component is going to be unmounted ! ")
    }

    render() {
        return (
            <h3>Practice 06 : =>Hello world !!!</h3>
        )
    }
}

export default Practice6;