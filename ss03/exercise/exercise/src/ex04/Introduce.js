import React, {Component} from "react";
import "./introduce.css"
class Introduce extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }
    handle = () => {
        this.setState({isExpand: !this.state.isExpand})
    }
    render() {
        const {isExpand} = this.state;
        let content ="";
        if (isExpand) {
            content = (
                <div>
                    <button onClick={this.handle}>Đóng giới thiệu</button>
                    <h2>Giới thiệu</h2>
                    <p>
                        Trong ReactJS, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props...
                        mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đo bạn có thể sử dụng Conditional rendering để render ra component
                        mà bạn mong muốn.
                    </p>
                </div>
            )
        }else {
            content = (
                <button onClick={this.handle}>Xem giới thiệu</button>
            )
        }
        return (
            <div>
                <div className= "header">
                    <h2>Conditional rendering</h2>
                </div>
                {content}
            </div>
        )
    }
}
export default Introduce;