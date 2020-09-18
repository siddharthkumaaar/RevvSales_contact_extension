import React, { Component } from 'react'
import Login from './Login'

import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
  } from "react-chrome-extension-router";
export default class LoginBtn extends Component{

    
    handleSubmit = ()=>{
       
        goTo(Login)
       
    }
    render(){
        
        return(
            <div>
                
                <button onClick={this.handleSubmit} style={{height:50,width:200,margin:20,backgroundColor:"skyblue"}} >CLICK FOR LOGIN TO REVVSALES</button>
            </div>
        )
    }
}

