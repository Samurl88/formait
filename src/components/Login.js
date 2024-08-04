import React from 'react'
import { useState } from 'react';
import { revokeAccessToken, OAuthProvider, signInWithCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";


import { auth, getReactNativePersistence, initializeAuth } from '../firebase/firebase'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  return (
    <div>
          <div style={{
              width: "400px",
              height: "450px",
              border: "1px solid black",
              borderRadius: "20px",
              position: "absolute",
              left: "calc(50% - 200px)",
              top: "150px",
              boxShadow: "0 4px 8px 0 rgb(178, 164, 249), 0 6px 20px 0 rgb(178, 164, 249)"
          }}>
              <p style={{
                  fontSize: "40px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "rgb(178, 164, 249)"
              }}>Sign In</p>
              <input
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                      width: "250px",
                      position: "absolute",
                      left: "75px",
                      height: "40px",
                      borderRadius: "10px"

                  }}
              />
              <input
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                      width: "250px",
                      position: "absolute",
                      left: "75px",
                      top: "200px",
                      height: "40px",
                      borderRadius: "10px"
                      
                  }}
              />
              <p style={{
                  color: "red",
                  position: "absolute",
                  top: "230px",
                  left: "100px"
              }}>{error}</p>
        <button 
        style={{
            width: "250px",
            position: "absolute",
            left: "75px",
            top: "280px",
            height: "40px",
            borderRadius: "20px",
            borderWidth: "1px",
            backgroundColor: "rgb(178, 164, 249)",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px"
        }}
        onClick={() => {
            signInWithEmailAndPassword(auth, email, password).then(() => {
                console.log("succesfully logged in")
                navigate("/convert")
            }).catch((e) => {
                setError("Incorrect email or password")
                console.log("wrong password or email")
            })
        }}>Log In</button>
        <a href="/register"
        style={{
            position: "absolute",
            left: "65px",
            top: "350px"
        }}
        >Don't have an account? Register here</a>
        </div>
        {/* <button onClick={() => {
            console.log(auth.currentUser.email)
        }}>check logged in</button> */}
    </div>
  )
}
