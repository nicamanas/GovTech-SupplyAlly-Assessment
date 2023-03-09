import React, { useContext } from "react"
import { UserContext } from "../reusables/layout"
import { useNavigate } from "react-router-dom"

function Login() {
	const navigate = useNavigate()
	const { user, setUser } = useContext(UserContext)

	function handleSubmit(e: any) {
		e.preventDefault()
		setUser(e.target.name.value)
		alert("Welcome, " + e.target.name.value + "!")
		navigate("/track")
	}

	return (
		<div className="background flex flex-col items-center justify-center">
			<div className="card align-center">
				<div className="py-2 px-2 justify-center">
					<h1 className="login-text">Login</h1>
					<form onSubmit={handleSubmit}>
						<div className="py-3 flex justify-center">
							<input
								type="text"
								name="name"
								className="login-field"
								placeholder="Enter user name"
								required
							/>
						</div>
						<div className="py-3 flex justify-center">
							<input
								type="submit"
								value="Login"
								className="login-button justify-center text-white"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
