import {useState} from 'react';

export default function Authenticate ({token}){
    const [successMessage, setSuccessMessage] = useState (null);
    const [error,setError] = useState (null);
    const [username,setUsername]=useState("");

async function handleClick (){
    try {
        const authenticateResponse = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate",{
            method:"GET",
            headers: {
                "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,
            }
        });
    const authenticateResult = await authenticateResponse.json();
    setSuccessMessage (authenticateResult.message);

    if (authenticateResult.data&&authenticateResult.data.username){
        setUsername (authenticateResult.data.username)
    }

}   catch (error){
    setError (error.message);
}}
    
    
    return (
    <div>
    <h2>Authenticate</h2>
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token!</button>
    </div>);
}