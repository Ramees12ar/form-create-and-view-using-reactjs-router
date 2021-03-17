import React, { Component } from 'react';
import './home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fname: "",
            lname: "",
            age: "",
            dob: "",
            place: ""

        };
    }
    Fname = (e) => {
        this.setState({fname: e.target.value});
    }
    Lname = (e) => {
        this.setState({lname: e.target.value});
    }
    Age = (e) => {
        this.setState({age: e.target.value});
    }
    DOb = (e) => {
        this.setState({dob: e.target.value});
    }
    Place = (e) => {
        this.setState({place: e.target.value});
    }
    handleSubmit = () => {
        //fetching the localstorage data
        var str = localStorage.getItem("localData");
        var arr;
        if(str != null){
            arr = JSON.parse(str);
             
        }
        else{
            arr = this.state.data;
        }
        this.setState({data: arr });
        //stroing the collected datas to variables
        var fname1= this.state.fname;
        var lname1 = this.state.lname;
        var age1 = this.state.age;
        var dob1 = this.state.dob;
        var place1 = this.state.place;

        //pushing the collected data to array
        arr.push({
            fname: fname1,
            lname: lname1,
            age: age1,
            dob: dob1,
            place: place1
        })
        this.setState({data: arr});
        //console.log(this.state.data);
        localStorage.setItem("localData", JSON.stringify(arr));
        // console.log(fname1);
        // console.log(lname1);
        // console.log(age1);
        // console.log(dob1);
        // console.log(place1);
        this.setState({ fname: "",lname: "",age: "", dob: "", place: "" });
    }

    render() {
        return(
            <div className="head">
                <h1>Data Form</h1>
                    <label className="label1">First Name:</label>
                    <input type="text" class="input1" 
                            name="fname" placeholder="Enter First name" 
                            id="fname" value={this.state.fname} onChange={this.Fname}></input>
                            <br></br>
                    <label className="label1">Last Name:</label>
                    <input type="text" class="input1" 
                            name="lname" placeholder="Enter Last name" 
                            id="lname" value={this.state.lname} onChange={this.Lname}></input>
                            <br></br>
                    <label className="label1">Age:</label>
                    <input type="text" class="input1" 
                            name="age" placeholder="enter age" 
                            id="age" value={this.state.age} onChange={this.Age}></input>
                            <br></br>
                    <label className="label1">Date of Birth: </label>
                    <input type="date" class="input1" 
                            name="dob" id="dob" value={this.state.dob} onChange={this.DOb}></input>
                            <br></br>
                    <label className="label1">Place:</label>
                    <input type="text" class="input1" 
                            name="place" placeholder="enter place" 
                            id="place" value={this.state.place} onChange={this.Place}></input>
                            <br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <br></br>
            </div>
        )
    }
}
export default Home;