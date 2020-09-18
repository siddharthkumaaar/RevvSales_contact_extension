import React, { Component } from 'react'
import axios from 'axios'
import styles from './login.module.css'
import {AuthContext} from './AuthContextProvider'
import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
  } from "react-chrome-extension-router";
import BtnCompo from './BtnCompo';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

            loginId: "",
            password: "",
            orgdomain: "",
            first_name: "",
            last_name: "",
            access_token1: "",
            refresh_token:""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {handleSubmitt} = this.context
        const {loginId,password,orgdomain} = this.state
        console.log(loginId,password,orgdomain)
        let url = 'https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/v2/auth/initiate-auth?'
        const options = {
            headers: {'Content-Type': 'application/json',
            GrantType: 'password'}
          };
        axios.post(url,
            
            {
              user_email: loginId,
              password: password,
              org_domain: orgdomain
            },
            options
          )
        .then(res=>{
            const {first_name,last_name,access_token,refresh_token} = res.data.User
            // console.log(res.data.User)
            // const {access_token1} = this.state
            this.setState({
                first_name:first_name,
                last_name: last_name,
                access_token1: access_token,
                refresh_token: refresh_token
            })
            handleSubmitt(this.state.access_token1)
            if(this.state.access_token1)
            {
                const token = this.state.access_token1
               goTo(BtnCompo,{token})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        const {first_name,last_name,access_token,refresh_token} = this.state
        // console.log(first_name,access_token,last_name,refresh_token)
        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="loginId">Login ID:</label>
                        <input type="text" name="loginId" value={this.state.loginId}
                        placeholder="Write Your Login ID...."
                        onChange={(e)=>this.setState({
                            loginId:e.target.value
                        })}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={this.state.password}
                        placeholder="Put Your Password..."
                        onChange={(e)=>this.setState({
                            password:e.target.value
                        })}/>
                    </div>
                    <div>
                        <label htmlFor="orgdomain">Org Domain:</label>
                        <input type="text" name="orgdomain" value={this.state.orgdomain}
                        placeholder="Put Your Sub Domain..."
                        onChange={(e)=>this.setState({
                            orgdomain:e.target.value
                        })}/>
                    </div>
                    <div>
                        <input type="submit" value="LOGIN"/>
                    </div>
                </form>
                {/* <div>
                    {access_token ? window.open():"sorry"}
                </div> */}
            </div>
        )
    }

}

Login.contextType = AuthContext