import React, { useState, useEffect } from 'react'
import { useMoralis } from "react-moralis";
import Logout from "./Logout";

const Home = () => {
   const { isAuthenticated, user, authenticate,isAuthenticating } = useMoralis();
   const [current,setCurrent]=useState(null); 
   
useEffect(() => {
     setCurrent(user);
 
}, [user])
 

    if (!isAuthenticated|| current==null || current===undefined ) {
      <button onClick={() => authenticate()}>Authenticate</button>;
      
      
      return (
        <div>
          {/* <button onClick={() => authenticate()}>Authenticate</button> */}
          PLEASE WAIT
          <button onClick={() => authenticate()}>Authenticate</button>;



        </div>
      );
    }

    

    else{

      
  
   return (
     <div>
       HOME
       <div>
         <Logout />
       </div>
       <p>USERNAME : {current.get("username")}</p>
       <p>ADDRESS : {current.attributes.ethAddress}</p>
     </div>
   );
}
}
 
export default Home;
  




