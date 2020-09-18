import React, { Component } from 'react';
import './App.css';
import Login from './component/Login';
import LoginBtn from './component/LoginBtn';
import { AuthContext } from './component/AuthContextProvider'
import BtnCompo from './component/BtnCompo';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {
  Router,
  Link,
  goBack,
  goTo,
  popToTop
} from "react-chrome-extension-router";
class App extends Component{
    
  render(){
    // console.log(this.context)
    const {isAuth,access_token} = this.context
    return (
      <>
        <Router>
          <LoginBtn />
        </Router>
      {/* // <Router>
        
      //   <div className="App">
      //     <Route path="/" exact component={LoginBtn}/>
      //   <Switch>
      //     <Route path="/login" component={Login}/>       
      //     <Route path="/btncompo" component={BtnCompo}/>
      //   </Switch>
      //   </div>
      // </Router> */}
      </>
    );
  }
}

App.contextType = AuthContext

export default App;
