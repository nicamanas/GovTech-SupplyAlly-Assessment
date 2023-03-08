import React from "react"
import Navbar from "../reusables/navbar"

function Login() {
	return (
		<div className="login flex flex-col items-center justify-center">
			<div className="card block p-6 max-w-lg py-4 justify-center">
				<div className="py-2 px-2 justify-center">
					<h1 className="m-2 login-text">Login</h1>
					<form>
						<div className="py-3 flex justify-center">
							<input
								type="text"
								name="name"
								className="login-field"
								placeholder="Enter user name"
								required
							/>
						</div>
						<div className="py-2 flex justify-center">
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
