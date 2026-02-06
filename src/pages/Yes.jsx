import React from 'react'
import mochiGif from '../assets/yes.gif'

export const Yes = () => {
    const name = sessionStorage.getItem('name')

    return (
        <div className="container">
            <img
                src={mochiGif}
                alt="Mochi Sticker"
                style={{ width: "200px" }}
            />
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <h1>I knew it, {name}.. 🫣💖</h1>
            <p className='cute-txt'>I’m smiling like an idiot right now 🥹</p>
        </div>
    )
}
