import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
        <h2>Sorry</h2>
        <p>That Page cannot Found</p>
        <Link to='/'>Back To Home Page</Link>
        </div>
    )
}

export default NotFound
