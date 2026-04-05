import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {  useAuth } from "../contex/AuthContex"
import { useNavigate } from "react-router-dom"

function Auth() {
    const [mode, setMode] = useState("login")
    const [error, setError] = useState(null)
    const navigete = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { SignUp, user, logout, login } = useAuth() 

    function onSubmit(data) {
        let result;
        if (mode === 'signup') {
            result = SignUp(data.email, data.password)
        } else {
            result = login(data.email, data.password)
        }

        setError(null)
        if (result.success) {
            navigete("/")
        } else {
            setError(result.error)
        }
    }

    return <div className="page">
        <div className="container">
            <div className="auth-container">
                {user && <p>{user.email}  <button onClick={logout}>Logout</button></p>}
                <h1 className="page-title">{mode === 'signup' ? "Sign Up" : "Login"}</h1>
                <p>{error}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input htmlFor="email" type="email" {...register("email", { required: "Email is required" })} />
                    </div>
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" htmlFor="password" {...register("password", {
                            required: "Password is required", minLength: {
                                value: 4,
                                message: "Password must be at least 4 characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Password must be less than 20 characters"
                            }
                        })} />
                    </div>
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                    <button type="submit">{mode === "signup" ? "Sign up" : "Login"}</button>
                </form>
                <div>
                    {mode === 'signup' ? <p>Log in to your account <span onClick={() => setMode('login')}>{<Link className="btn" to="/auth">Login</Link>}</span> </p> : <p>Don't have an account <span onClick={() => setMode('signup')}>{<Link className="btn" to="/auth">Sign Up</Link>}</span></p>}
                </div>
            </div>
        </div>
    </div>
}

export default Auth 