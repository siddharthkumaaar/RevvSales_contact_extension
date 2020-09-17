import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

            loginId = "",
            password = ""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {loginId,password} = this.state
        axios.post("https://api.revvsales.com/api/v2/auth/initiate-auth")
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
                        <input type="submit" name="LOGIN"/>
                    </div>
                </form>
            </div>
        )
    }

}