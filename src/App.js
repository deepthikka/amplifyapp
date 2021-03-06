import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Auth } from 'aws-amplify';
import logo from './logo.svg';
import './css/App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { API } from 'aws-amplify';
//import { listNotes } from './graphql/queries';

function App() {

 async function checkUser() {
   const user =  await Auth.currentAuthenticatedUser();
   console.log('user : ' + user)
 }

//  async function fetchNotes() {
//   const apiData = await API.graphql({ query: listNotes });
//   console.log('Notes : ' + apiData.data.listNotes.items);
    console.log("Here")
// }


 return (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width='200' height='200' />
        {/* <button onClick={() => Auth.federatedSignIn()}> Sign in</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={() => Auth.signOut()}>Sign Out</button> */}
        <button onClick={() => Auth.federatedSignIn()}> Influencer</button>
        <button onClick={fetchNotes}> Fetch Data</button>
        <button onClick={() => Auth.federatedSignIn()}> Follower</button>
      </header>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
   </Switch>
    </div>
    </Router>
  );
}

export default App;