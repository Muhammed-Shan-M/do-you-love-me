import React from 'react'
import { Link } from 'react-router-dom';
import mochiGif from '../assets/No3.gif'

export const No3 = () => {

    const name = sessionStorage.getItem('name')

    const moveRandomEl = (e) => {
        e.preventDefault(); 

        const el = e.currentTarget

        el.style.position = "absolute";
        el.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        el.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }


    return (
        <div className="container">
            <img
                src={mochiGif}
                alt="Mochi Sticker"
                style={{ width: "200px" }}
            />

            <h1>Okay {name}… last time asking 🥹</h1>
            <p>Will you say yes? 💗</p>

            <div className="btn">
                <Link to="/finaly">Yes</Link>
                <Link to="#" onMouseEnter={moveRandomEl} onClick={moveRandomEl}>No</Link>
            </div>
        </div>
    )
}
