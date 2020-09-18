import React from "react";
import {AppContext} from "../Context/ContextProvider"


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
            twitter:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render(){
        const {title,name,email,contactNo, type, desc, linked, insta, twitter} = this.state
        console.log(title,name,email,contactNo, type, desc, linked, insta, twitter)
        const data = {title,name,email,contactNo, type, desc, linked, insta, twitter}
        const {handleSubmit} = this.context

        return( <div style={{border:"1px solid black"}}>
            <h3>Contact Form</h3>
            <form onSubmit={() => handleSubmit(data)}>
                <div><label htmlFor="">Title :- </label>
                <select name="title" onChange={this.handleChange} id="">
                    <option value="Mr.">Mr</option>
                    <option value="Mrs.">Mrs</option>
                </select>
                </div><br/>
                <div><label htmlFor="">Name :- </label>
                <input type="text" name="name"  onChange={this.handleChange} />
                </div><br/>
                <div><label htmlFor="">Email :- </label>
                <input type="email" name="email"  onChange={this.handleChange} />
                </div><br/>
                <div><label htmlFor="">Phone No :- </label>
                <input type="number" name="contactNo" onChange={this.handleChange} />
                </div><br/>
                <div><label htmlFor="">Type :- </label>
                <select name="type" onChange={this.handleChange}>
                    <option value="individual">Individual</option>
                    <option value="corporate">Corporate</option>
                </select>
                </div><br/>
                <div><label htmlFor="">Description :- </label>
                <input type="text" name="desc" onChange={this.handleChange} />
                </div><br/>                
                <div><label htmlFor="">LinkedIn url :- </label>
                <input type="text" name="linked" onChange={this.handleChange} />
                </div><br/>
                <div><label htmlFor="">instagram url :- </label>
                <input type="text" name="insta" onChange={this.handleChange}/>
                </div><br/>
                <div><label htmlFor="">Twitter url :- </label>
                <input type="text" name="twitter" onChange={this.handleChange}/>
                </div><br/>
                <input type="submit" value="Create"/>
            </form>
        </div> )
    }
}

ContactForm.contextType = AppContext;
export default ContactForm