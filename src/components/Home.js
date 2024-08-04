import React from 'react'

import ordermatic from "../assets/ordermatic.png"
import { IoStar } from "react-icons/io5";


export default function Home() {
  return (
    <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "95vh", flexDirection: "column", gap: 20, backgroundImage: "linear-gradient(to bottom, white, rgb(178, 164, 249, 0.4))"}}>
            <img src={ordermatic} width="800px" />
            <div style={{ fontSize: "30px", fontStyle: "italic", fontWeight: 500, letterSpacing: 1.5 }}>Reformatting today for tomorrow's future.</div>
            <a style={{ marginTop: "30px", marginBottom: 200}} className="startBtn" href="/convert">Let's Get Started!</a>
        </div>
    </>
  )
}
