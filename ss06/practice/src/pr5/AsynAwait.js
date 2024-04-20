import React, {Component} from "react";
import axios from "axios";

export default class AsynAwait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: []
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.getUsers().then(res => {
            this.setState({users: res.data})
        })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    getUsers = async () => {
        await new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
        return await axios.get("http://localhost:1998/users");
    };

    render() {
        const {loading, users} = this.state;
        if (loading) return <p>Loading...</p>;
        return (
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        )
    }
}
