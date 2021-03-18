import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './data.css'
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sort: [],
        }
    }
    async componentDidMount() {
        var str =await (localStorage.getItem("localData"));
        if(str !=null){
            var arr= JSON.parse(str);
            await this.setState({data: arr});
        }
        else{
            alert("No data available. Please add data")
        }
        //console.log(this.state.data);
    }

    //array filtered based on view click
    detail = (k) => {
        var arr = this.state.data;
        let newData = arr.filter(function (id,index) {
            return index === k;
        });
        this.setState({ sort: newData }); 
        //console.log(this.state.sort);
        localStorage.setItem("sortData", JSON.stringify(newData));       
    }

    //delete data from storage
    delete = (k) => {
        var arr = this.state.data;
        let newData = arr.filter(function (id,index) {
            return index != k;
        });
        if(!window.confirm("Are you sure, you want to delete this task?")){
            return;
        }
        this.setState({ sort: newData });
        localStorage.setItem("localData", JSON.stringify(newData));
        window.location.reload();
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
                        {
                        this.state.data.map((i, k) => {
                            return (
                                <tr id={k}>
                                        <td class="cap">{i.fname}</td>
                                        <td class="upp">{i.lname}</td>
                                        <td>
                                            {/* <button style={{backgroundColor:"green"}} onClick={() => {this.detail(k)}}>view</button> */}
                                            <Link to={`view/${k}`}>View</Link>
                                            <button onClick={() => {this.delete(k)}}>delete</button>
                                        </td>
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

export default Data;