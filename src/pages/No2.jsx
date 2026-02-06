import React from 'react'
import { Link } from 'react-router-dom'
import mochiGif from '../assets/No2.gif'

export const No2 = () => {


    return (
        <div className="container">

            <img
                src={mochiGif}
                alt="Mochi Sticker"
                style={{ width: "200px" }}
            />

            <h1>Why are you doing this? 😣</h1>
            <p>Please say yes.😣</p>

            <div className="btn">
                <Link to="/finaly">Yes</Link>
                <Link to="/no3">No</Link>
            </div>
        </div>
    )
}
