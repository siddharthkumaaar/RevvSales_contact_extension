import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

            loginId: "",
            password: "",
            orgdomain: ""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {loginId,password,orgdomain} = this.state
        console.log(loginId,password,orgdomain)
        let url = 'https://api.revvsales.com/api/v2/auth/initiate-auth?'
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
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
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
                        placeholder="Put Your Password..."
                        onChange={(e)=>this.setState({
                            orgdomain:e.target.value
                        })}/>
                    </div>
                    <div>
                        <input type="submit" name="LOGIN"/>
                    </div>
                </form>
            </div>
        )
    }

}