import React, {Component} from "react";
class Home extends Component{
    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <div>
                    <h1>{this.props.heading}</h1>
                    <button onClick={this.props.inOut}>{this.props.nameButton}</button>
                </div>
            </div>
        )
    }
}
export default Home;