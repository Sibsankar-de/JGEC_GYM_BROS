import { useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import Error from '../../common/Error';
import { use } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Auth = () => {
    const user = useUser();
    // console.log(user);
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const [userId,setUserId] = useState(null);
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);

    useEffect(()=>{
        if(user.isLoaded && user.isSignedIn){
            setUserId(user.user.id);
            setName(user.user.fullName);
            setEmail(user.user.primaryEmailAddress.emailAddress);
        }

    },[user.isLoaded,user.isSignedIn])
    const DatabaseUser = async()=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userId:userId,
                    name:name,
                    email:email
                })
            })
            const data = await res.json();
            if(data.success){
                setSuccess("User created successfully in database");
            }else{
                setError("Failed to create user in database");
            }
        } catch (error) {
            console.log(error);
            setError("Failed to create user in database");
        }
    }
    useEffect(()=>{
        if(user.isLoaded && user.isSignedIn && userId && name && email){
            DatabaseUser();
        }
    },[userId,name,email,user.isLoaded,user.isSignedIn])
  return (
    <div>
        {/* {error && <Error error={error}/>}
        {success && toast.success(success)} */}
    </div>
  )
}

export default Auth