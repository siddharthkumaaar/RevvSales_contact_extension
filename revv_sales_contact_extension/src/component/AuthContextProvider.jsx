import React, { createContext, Component } from 'react'

export const AuthContext = createContext()

export default class AuthContextProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuth: false,
            access_token:""
        }
    }

    toggleAuth = ()=>{
        this.setState({
            isAuth: !this.state.isAuth
        })
    }

    handleSubmitt = (e)=>{
        // console.log(e)
        this.setState({
            access_token:e
        })
    }
    render(){
        const {isAuth,access_token} = this.state
        const {toggleAuth,handleSubmitt} = this
        return(
            <AuthContext.Provider value={{isAuth,toggleAuth,handleSubmitt,access_token}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}