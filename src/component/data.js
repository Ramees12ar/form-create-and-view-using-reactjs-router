import React, { Component } from 'react';
import './data.css'
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            fname: "",
            lname: "",
            age: "",
            dob: "",
            place: ""
        }
    }
    componentDidMount() {
        var arr =JSON.parse(localStorage.getItem("localData"));
        this.setState({data: arr});
        console.log(this.state.datas);
        console.log(arr);
    }
    render() {
        return (
            <div className="head2">
                <table class="table">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>View</th>
                        </tr>
                        <tr>
                            <td>ramees</td>
                            <td>ar</td>
                            <button>view</button>
                        </tr>
                        <tr>
                            <td>ramees</td>
                            <td>ar</td>
                            <td><button>view</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Data;