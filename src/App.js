import React, { Component } from 'react';
import Axios from "axios";
import UserForm from "./components/UserForm";
import './App.css';


// https://api.github.com/users/john


class App extends Component {
  state = {
    repos: null
  }
  
  
  
  // e = event object
  getUser = (e) =>{
    
  e.preventDefault();                //stops page from refreshing on state change
 const user = e.target.elements.username.value;
 if (user){                                         //if (user) is the same as if(user===true)
  Axios.get(`https://api.github.com/users/${user}`) //putting the axios call in a if statement 
  .then((res)=>{                                     //prevents an error message to the console when
    const repos = res.data.public_repos;             //getUser is called without inputting a value(name)
    this.setState ({repos}); 
   })                   
 }else return;
 //if the name of the property and the value are the same, you can just write 1 word
                             // instead of ex. ({repos:repos})
 
                             //username specified in useform
                            //function needs to be bound to useform, can use props

}
  render() {
    return (
      <div className="App">
      <header className="App-header">
      http request in react
      </header>
      <UserForm getUser={this.getUser}/>
      { this.state.repos ? <p> number of repos: {this.state.repos} </p>  :
      <p>Please enter a username</p> }
      </div>
    );
  }
}
              //this=app, getuser=getuser(function)
              //in order to access the useform input, props must be passed to the statless component
// {this.state.repos ?} is the same as:
/* if (this.state.repos){
  <p> number of repos: {this.state.repos} </p>
}else{
  <p>Please enter a username </p>
}
*/



export default App;
