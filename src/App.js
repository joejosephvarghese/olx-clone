import React,{useEffect,useContext} from "react";

import "./App.css";
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
  import Signup from '../src/Pages/Signup'
   import Login from '../src/Pages/Login'
   import Create from './Pages/Create.js'
   import View from './Pages/ViewPost.js'
   import Post from "./store/PostContex";
  import {AuthContext, FirebaseContext} from './store/Context'
 
   
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {

  const {setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
  useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
  })
  return (
    <div>
      <Post>
      <Router>
      <Route exact path="/">
        <Home />
       </Route>

       <Route path="/signup">
        <Signup />
       </Route>

       <Route path="/login">
        <Login/>
       </Route>

       <Route path="/create">
        <Create/>
       </Route>

       <Route path="/view">
        <View/>
       </Route>
      </Router >

      </Post>
    </div>
  );
}

export default App;
