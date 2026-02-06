import { Link } from "react-router-dom"
import mochiGif from '../assets/No1.gif'


export const No1 = () => {
    const name = sessionStorage.getItem('name')

    return (
        <div className="container">
            <img
                src={mochiGif}
                alt="Mochi Sticker"
                style={{ width: "200px" }}
            />
            <h1>Wait, {name}… think again! 🙄</h1>
            <p>Don’t decide so quickly.😥</p>

            <div className="btn">
                <Link to="/finaly">Yes</Link>
                <Link to="/no2">No</Link>
            </div>
        </div>
    )
}
