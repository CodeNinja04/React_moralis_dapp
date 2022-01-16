import React, { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis";


const Signup = () => {
  const { signup, isAuthenticated, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="enter email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        placeholder="enter username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <input
        placeholder="enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <button onClick={() => signup(username, password, email)}>Sign up</button>
    </div>
  );
};
 
export default Signup;