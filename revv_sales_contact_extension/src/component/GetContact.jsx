import React from "react";
import Axios from "axios";
import styles from "./contact.module.css"
import {v4 as uuid} from "uuid"

class GetContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            count:1
        }
    }

    handleClick = (e) =>{
        e.preventDefault();
        let url = "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/contacts/all?page_num=1"
        const option = {
            headers: {"Content-Type":"application/json",
            "AccessToken": this.props.token
        }}
    Axios.get(url,option).then(res=>{
        console.log(res.data.Contacts);
        this.setState({
            data:res.data.Contacts
        })
        
    }).catch(err=>{
        console.log(err)
    })
        }    

    render(){
        return( <div>
            <h3>click here to get all contact details </h3>
            <button onClick={this.handleClick}>Get Contact</button>
        <div style={{marginTop:"5px"}}>{this.state.data.map((item)=>(
        <div key={uuid()} className={styles.main}>
            <div style={{flex:0}}>{this.state.count++}</div>
            <div style={{flex:1}}>{`${item.email.length>0 ? item.email : "null"}`}</div>
            <div style={{flex:1}}>{`${item.name.length>0 ? `${item.title} ${item.name}` : "null"}`}</div>
            <div style={{flex:1}}>{`${item.phone.length>0 ? item.phone : "null"}`}</div>
        </div>))}</div>
        </div> )
    }
}

export default GetContact