import React, { Component } from 'react';
import './detail.css';
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: [],
        }
    }
    async componentDidMount() {
        var str =await (localStorage.getItem("sortData"));
        if(str!=null ) {
            var arr = JSON.parse(str);
            await this.setState({sort: arr});
        }
        else {
            alert("View button not yet clicked!")
        }
        //console.log(this.state.sort);
    }
    render() {
        return (
            <div className="head3">
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Date of Birth</th>
                        <th>Place</th>
                    </tr>
                    {
                    this.state.sort.map((i, k) => {
                        return (
                            <tr id={k}>
                                <td class="cap">{i.fname}</td>
                                <td class="upp">{i.lname}</td>
                                <td>{i.age}</td>
                                <td>{i.dob}</td>
                                <td>{i.place}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default View;