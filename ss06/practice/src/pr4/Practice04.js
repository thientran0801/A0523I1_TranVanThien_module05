import React, {Component} from "react";
import axios from "axios";

export default class Practice04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.getUsers()
            .then(res => {
                this.setState({users: res.data})
            })
            .catch(err => {
                throw err;
            })
            .finally(()=> {
                this.setState({loading: false})
            });
    }

    getUsers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    axios.get("http://localhost:1998/users")
                        .then(res => {
                            return resolve(res);
                        }).catch(err => {
                        reject(err);
                    })
                }
                , 3000)
        })
    }

    render() {
        const {loading, users} = this.state;
        if (loading) return <p>Loading...</p>;
        return (

            <div>
                <h2>List users:</h2>
                <ul>
                    {
                        users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}