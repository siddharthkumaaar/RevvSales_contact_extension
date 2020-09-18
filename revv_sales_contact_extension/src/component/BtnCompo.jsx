import React, { Component } from 'react'
import styles from './login.module.css'
import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
  } from "react-chrome-extension-router";
import Login from './Login';
import GetContact from './GetContact';
import ContactForm from './ContactForm';
export default class BtnCompo extends Component{

    handleLogout = ()=>{
        goBack(Login)
    }

    handleContactList = ()=>{
        const {token} = this.props
        // console.log(token)
        goTo(GetContact,{token})
    }

    handleCreate = ()=>{
        const {token} = this.props
        goTo(ContactForm,{token})
    }

    render(){

        return(
            <div className={styles.box}>
                <div>
                    <button className={styles.btn1} onClick={this.handleContactList}>Conatct List</button>
                </div>
                <div>
                    <button className={styles.btn2} onClick={this.handleCreate}>Create Conatct</button>
                </div>
                <div>
                    <button className={styles.btn3} onClick={this.handleLogout}>Log Out</button>
                </div>
            </div>
        )
    }
}