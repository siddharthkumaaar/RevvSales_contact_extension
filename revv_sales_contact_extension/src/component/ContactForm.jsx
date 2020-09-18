import React from "react";
// import {AppContext} from "../Context/ContextProvider"
import axios from 'axios'
import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
  } from "react-chrome-extension-router";
import BtnCompo from "./BtnCompo";

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            name:"",
            email:"",
            contactNo:"",
            type:"",
            desc:"",
            linked:"",
            insta:"",
            twitter:"",
            note:"",
            res:"",
            err:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {title,name,email,contactNo, type, desc, linked, insta, twitter,note} = this.state
        let url = "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/contacts"
        const option = {
            headers: {"Content-Type":"application/json",
            "AccessToken": this.props.token
        }}
        axios.post(url,
            
            {
                name: name,
                title:title,
                description: desc,
                email:email,
                phone:contactNo,
                type:type,
                linkedin:linked,
                instagram:insta,
                twitter:twitter,
                notes:note

            },
            option
          )
    
    .then(res=>{
        console.log(res);
        this.setState({
            res:res.status
        })
        
    }).catch(err=>{
        console.log(err)
        this.setState({
            err:err
        })
    })
    }

    handleGoback = ()=>{
        goBack(BtnCompo)
    }

    render(){
        const {title,name,email,contactNo, type, desc, linked, insta, twitter} = this.state
        console.log(title,name,email,contactNo, type, desc, linked, insta, twitter)
        const data = {title,name,email,contactNo, type, desc, linked, insta, twitter}
        // const {handleSubmit} = this.context

        return( <div style={{border:"1px solid black"}}>
            <h3>Contact New Contact</h3>
            <form onSubmit={this.handleSubmit}>
                <div><label htmlFor="">Title :- </label>
                <select name="title" onChange={this.handleChange} id="">
                    <option value="Mr.">Mr</option>
                    <option value="Mrs.">Mrs</option>
                </select>
                </div>
                <div><label htmlFor="">Name :- </label>
                <input type="text" name="name"  onChange={this.handleChange} />
                </div>
                <div><label htmlFor="">Email :- </label>
                <input type="email" name="email"  onChange={this.handleChange} />
                </div>
                <div><label htmlFor="">Phone No :- </label>
                <input type="number" name="contactNo" onChange={this.handleChange} />
                </div>
                <div><label htmlFor="">Type :- </label>
                <select name="type" onChange={this.handleChange}>
                    <option value="individual">Individual</option>
                    <option value="corporate">Corporate</option>
                </select>
                </div>
                <div><label htmlFor="">Description :- </label>
                <input type="text" name="desc" onChange={this.handleChange} />
                </div>            
                <div><label htmlFor="">LinkedIn url :- </label>
                <input type="text" name="linked" onChange={this.handleChange} />
                </div>
                <div><label htmlFor="">instagram url :- </label>
                <input type="text" name="insta" onChange={this.handleChange}/>
                </div>
                <div><label htmlFor="">Twitter url :- </label>
                <input type="text" name="twitter" onChange={this.handleChange}/>
                </div>
                <div><label htmlFor="note">Notes :- </label>
                <input type="text" name="note" onChange={this.handleChange}/>
                </div>
                <input type="submit" value="Create"/>
                <button onClick={this.handleGoback}>Go Back</button>
            </form>
            <div>
                {this.state.res ? "Contact Submitted Successfully" : "" || this.state.err ? "Some error are there...!": ""}
            </div>
        </div> )
    }
}

// ContactForm.contextType = AppContext;
export default ContactForm