 import { useEffect } from "react";
import { Link } from "react-router-dom";
 import { useParams } from "react-router-dom";
 import mochiGif from '../assets/home.gif'


export const Home = () => {

    const {name} = useParams()

    useEffect(() => {
        sessionStorage.setItem('name',name)
    },[name])

    return (
        <div className="container">
            <img
                src={mochiGif}
                alt="Mochi Sticker"
                style={{ width: "200px" }}
            />

            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <h1>Hey {name}, will you be my Valentine 💖?</h1>
            <p>You know you want to 😉</p>

            <div className="btn">
                <Link to="/finaly">Yes</Link>
                <Link to="/no1">No</Link>
            </div>
        </div>
    )
}
