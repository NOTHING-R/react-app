import { Link } from "react-router-dom"
import { useAuth } from "../contex/AuthContex"

function Navbar() {
    const {user, logout} = useAuth() 
    return <nav className="navbar">

        <div className="navbar-container">

            <Link className="navbar-brand" to='/'>Shophub</Link>

            <div className="navbar-links">
                <Link className="navbar-link" to='/'>Home</Link>
                <Link className="navbar-link" to='/checkout'>Cart</Link>
            </div>

            <div className="navbar-auth">
                {!user ? <div className="navbar-auth-links">
                    <Link className="btn btn-secondary" to='/auth'>Login</Link>
                    <Link className="btn btn-primary" to='/auth'>Signup</Link>
                </div>: <div><span>{user.email}</span> <button className="btn btn-secondery" onClick={logout}>Logout</button></div>}

            </div>
        </div>
    </nav>
}

export default Navbar