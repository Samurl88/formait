import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase/firebase';

export default function Register() {
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
                }}>Sign Up</p>
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
                    fontSize: "20px",
                }}
                onClick={() => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then(() => {
                            console.log("successfully registered");
                            navigate("/convert");
                        })
                        .catch((e) => {
                            setError("That email is already taken")
                            console.log("email already in use!");
                        });
                }}>Register</button>
                <a href="/login"
                    style={{
                        position: "absolute",
                        left: "65px",
                        top: "350px"
                    }}
                >Already have an account? Log in here</a>
            </div>
        </div>
    );
}
