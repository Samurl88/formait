import React from 'react'
import { useState } from 'react';
import { revokeAccessToken, OAuthProvider, signInWithCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";



import { auth } from '../firebase/firebase'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <input placeholder='Email' onChange={(text) => {
            //   console.log(text.target.value)
            setEmail(text.target.value);
        }}></input>
          <input placeholder='Pasword' onChange={(text) => {
              setPassword(text.target.value);
          }}
          type='password'></input>
        <button onClick={() => {
            createUserWithEmailAndPassword(auth, email, password)
        }}>Register</button>
    </div>
  )
}
