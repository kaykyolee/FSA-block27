import { useState } from 'react'
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
// import './App.css'

export default function App() {
  const [token, setToken]=useState (null);
  const [username,setUsername]=useState("");

  return (
    <>
      <Authenticate token={token} setToken={setToken} setUsername={setUsername}/>
      <SignUpForm token={token} setToken={setToken} setUsername={setUsername}/>
      {username&&<p>Logged in as: {username}</p>}
    </>
  )
}
