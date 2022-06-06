import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import { Outlet } from 'react-router-dom';
import { UserContext } from './components/user-context'


function App() {
  /* tate variables to render login or logout */ 
  /* Navbar */ 
  const [loggedIn, setLoggedIn] = React.useState(false);

  /* Calling context to insert the state variables for navbar use*/ 
  const ctx = React.useContext(UserContext);
  
  /* Add state variables to context. Now they can be used */ 
  ctx.loginState = [loggedIn, setLoggedIn];
  

  return (
    <div>
    
      {/* The outlet tag allows the router to render links*/}
      <NavigationBar/>
      <br/>
      <div className="centered">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
