import React, { useContext } from "react"
import { UserContext } from "../App"
import { Link } from "react-router-dom"

function Navbar() {
	const { user } = useContext(UserContext)
	const [navbarOpen, setNavbarOpen] = React.useState(false)

	return (
		<>
			<nav>
				<div className="w-full">
					<div className="flex border-b-2 justify-center px-4 py-8 space-x-5 md:justify-between">
						<div className="flex flex-row navbar space-x-5 px-4">
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
							{/* Hide these in mobile */}
							<div className="navbar-text hidden md:flex">
								<Link to="/track">Track</Link>
							</div>
							<div className="navbar-text hidden md:flex">
								<Link to="/statistics">Statistics</Link>
							</div>
						</div>

						<div className="flex flex-row navbar-text justify-end px-4 hidden md:flex">
							{user ? (
								<p>&#x1F44B; Hi! Please log in!</p>
							) : (
								<p>&#x1F44B; Hi Alex! | Logout</p>
							)}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
