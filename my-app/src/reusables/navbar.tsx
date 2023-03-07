import React, { useContext } from "react"
import { UserContext } from "../App"
import { Link, Outlet } from "react-router-dom"

function Navbar() {
	const { user } = useContext(UserContext)
	const [navbarOpen, setNavbarOpen] = React.useState(false)

	return (
		<>
			<nav>
				<div className="w-full">
					<div className="flex border-b-2 justify-between px-4 py-8 space-x-5">
						<div className="flex flex-row navbar justify-start space-x-5 px-4">
							{/* Website Logo */}
							<a className="flex gap-2 mr-4">
								<Link to="/">
									<img
										src={
											process.env.PUBLIC_URL +
											"/supplyAlly-logo.png"
										}
									/>
								</Link>
							</a>
							<div className="navbar-text">
								<Link to="/track">Track</Link>
							</div>
							<div className="navbar-text">
								<Link to="/statistics">Statistics</Link>
							</div>
						</div>

						<div className="flex flex-row navbar-text justify-end px-4">
							{user ? (
								<p>&#x1F44B; Hi! Please log in!</p>
							) : (
								<p>&#x1F44B; Hi Alex! | Logout</p>
							)}
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default Navbar
