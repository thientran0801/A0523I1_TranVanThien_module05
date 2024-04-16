import React, {Component} from "react";

class ListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: "1",
                    name: "Trần Văn Thiện",
                    age: "26",
                    address: "Hải Lăng"
                },
                {
                    id: "2",
                    name: "Trần Văn Tiến",
                    age: "58",
                    address: "Hải Lăng"
                },
                {
                    id: "3",
                    name: "Nguyễn Thị Thu Thủy",
                    age: "23",
                    address: "Hải Lệ"
                },
                {
                    id: "4",
                    name: "Trần Phước Hiệp",
                    age: "26",
                    address: "Triệu Phong"
                },
                {
                    id: "5",
                    name: "Võ Văn Sơn",
                    age: "26",
                    address: "Ái Tử"
                }
            ]
        };
    }

    render() {
        const {list} = this.state;
        return (
            <div>
                <table  border= "1px solid">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {
                        list.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.address}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}
export default ListStudent;