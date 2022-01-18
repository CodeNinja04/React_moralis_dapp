import React, { useState, useEffect } from 'react'

import { useMoralis } from "react-moralis";



const Role = () => {

    const { login, isAuthenticated, user } = useMoralis();
    const [current,setCurrent]=useState("");

    useEffect(() => {
      setCurrent(user);
      console.log(user);
    }, [user]);

if (!isAuthenticated || current == null || current === undefined) {
  

  return (
    <div>
      {/* <button onClick={() => authenticate()}>Authenticate</button> */}
      PLEASE WAIT
     
    </div>
  );
}

    return ( 
    <>

    HEllo please Select your ROLE 
    {current.attributes.test}
   
    </> );
}
 
export default Role;