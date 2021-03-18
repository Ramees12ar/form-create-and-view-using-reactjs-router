import React, { Component } from 'react';
import './home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sort: [],
            fname: "",
            lname: "",
            age: "",
            dob: "",
            place: "",
            cmnt1: "",
            id1: "",
            cmnt2: "",
            id2: "",
            cmnt3: "",
            id3: "",
            cmnt4: "",
            id4: "",
            cmnt5: "",
            id5: "",

        };
    }
    componentDidMount() {
        this.setState({sort: ""});
        var sort = this.state.sort;
        localStorage.setItem("sortData", JSON.stringify(sort));
    }
    
    Fname = (e) => {
        this.setState({fname: e.target.value});
        var l=e.target.value;
        if(l.match(/^[A-Za-z]+$/)){
            this.setState({cmnt2: "",cmnt3: "",cmnt4:"",cmnt1: "accepted",id1: "green"});
        }
        else{
            this.setState({cmnt2: "",cmnt3: "",cmnt4:"",cmnt1: "please enter only alphabets",id1: "red"});
        }
    }
    Lname = (e) => {
        this.setState({lname: e.target.value});
        var l=e.target.value;
        if(l.match(/^[A-Za-z]+$/)){
            this.setState({cmnt1: "",cmnt3: "",cmnt4:"",cmnt2: "accepted",id2: "green"});
        }
        else{
            this.setState({cmnt1: "",cmnt3: "",cmnt4:"",cmnt2: "please enter only alphabets",id2: "red"});
        }
    }
    Age = (e) => {
        this.setState({age: e.target.value});
        var z=e.target.value;
        if(z.match(/^\d+$/)){
            this.setState({cmnt1: "",cmnt2: "",cmnt4:"", cmnt3: "accepted",id3: "green"});
        }
        else {
            this.setState({cmnt1: "",cmnt2: "",cmnt4:"",cmnt3: "please enter age correctly!",id3: "red"});
        }
    }
    DOb = (e) => {
        this.setState({dob: e.target.value});
    }
    Place = (e) => {
        this.setState({place: e.target.value});
        var l=e.target.value;
        if(l.match(/^[A-Za-z]+$/)){
            this.setState({cmnt1: "",cmnt2: "",cmnt3:"",cmnt4: "accepted",id4: "green"});
        }
        else{
            this.setState({cmnt1: "",cmnt2: "",cmnt3:"",cmnt4: "please enter place correctly",id4: "red"});
        }
    }
    handleSubmit = () => {
        //fetching the localstorage data
        this.setState({cmnt4: ""});
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
        //console.log(dob1);
        var letters = /^[A-Za-z]+$/;
        var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
        if((fname1.match(letters)) && (lname1.match(letters)) && (age1.match(/^\d+/)) && 
        (dob1 !== null && dob1 !== "" && pattern.test(dob1)) && place1.match(letters)){
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
        else{
            if(((!fname1.match(letters)) || fname1==null) || ((!lname1.match(letters)) || lname1==null)){
                alert("please enter valid name")
            }
            else if((!age1.match(/^\d+/)) || age1==null) {
                alert("please enter age")
            }
            else if(dob1 === null || dob1 === "" || !pattern.test(dob1)){
                alert("please choose date of birth")
            }
            else if((!place1.match(letters)) || place1==null) {
                alert("please enter native place")
            }
        }
        
    }

    render() {
        return(
            <div className="head">
                <h1>Data Form</h1>
                    <label className="label1">First Name:</label>
                    <input type="text" class="input1" 
                            name="fname" placeholder="Enter First name"  autoComplete="off"
                            id="fname" value={this.state.fname} onChange={this.Fname}></input>
                            <br></br><span id={this.state.id1}>{this.state.cmnt1}</span><br></br>
                    <label className="label1">Last Name:</label>
                    <input type="text" class="input1" 
                            name="lname" placeholder="Enter Last name" autoComplete="off"
                            id="lname" value={this.state.lname} onChange={this.Lname}></input>
                            <br></br><span id={this.state.id2}>{this.state.cmnt2}</span><br></br>
                    <label className="label1">Age:</label>
                    <input type="text" class="input1" 
                            name="age" placeholder="enter age" autoComplete="off"
                            id="age" value={this.state.age} onChange={this.Age}></input>
                            <br></br><span id={this.state.id3}>{this.state.cmnt3}</span><br></br>
                    <label className="label1">Date of Birth: </label>
                    <input type="date" class="input1" 
                            name="dob" id="dob" value={this.state.dob} onChange={this.DOb}></input>
                            <br></br>
                    <label className="label1">Place:</label>
                    <input type="text" class="input1" 
                            name="place" placeholder="enter place" autoComplete="off"
                            id="place" value={this.state.place} onChange={this.Place}></input>
                            <br></br><span id={this.state.id4}>{this.state.cmnt4}</span><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
export default Home;