import React, { useState, useEffect } from 'react'
import { useMoralis } from "react-moralis";
import Logout from "./Logout";






const Home = () => {
   const { isAuthenticated, user, authenticate,isAuthenticating } = useMoralis();
    

    if (isAuthenticating) {
      return (
        <div>
          {/* <button onClick={() => authenticate()}>Authenticate</button> */}
          PLEASE WAIT 
        </div>
      );
    }
  
   return (
     <div>
       HOME
       <div>
         <Logout />
       </div>
       <p>USERNAME : {user.get("username")}</p>
       <p>ADDRESS : {user.attributes.ethAddress}</p>
     </div>
   );
}
 
export default Home;