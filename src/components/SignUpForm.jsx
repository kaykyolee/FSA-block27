import { usePreviousProps } from '@mui/utils';
import { left } from '@popperjs/core';
import {useState} from 'react';


export default function SignUpForm (props){
    // console.log(props)
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState (null);
    const[usernameError,setUsernameError]=useState(null);

async function handleSubmit (event){
    event.preventDefault();

    if (username.length!==8){
        setUsernameError("Username must be eight characters in length")
        return;
    }

    try{
        const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/signup',{
            method:"POST",
            body:JSON.stringify ({username},{password}),
        })
        const result = await response.json ();
        // console.log (result);
        props.setToken(result.token);
        props.setUsername(username)
    } catch (error){
        setError(error.message);
    }
}

    return (
    <div>
    <h2>Sign Up</h2>{
      error && <p>{error}</p>
    }
     <form className='form' onSubmit ={handleSubmit}>
        <label>
        Username: {" "} 
        <input
            value={username}
            onChange ={(e)=>{
                setUsername(e.target.value);
                setUsernameError(null);
            }}
        />
        </label>
        {usernameError &&<p style={{color:'red'}}>{usernameError}</p>}
        <label className='password'>
        Password: {" "}
        <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
        />
        </label>
        <button className='submitButton' type="submit">Submit</button>
     </form>
     </div>
    );
}
