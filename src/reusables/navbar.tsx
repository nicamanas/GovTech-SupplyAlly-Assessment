import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./layout"

function Navbar() {
	const navigate = useNavigate()
	const { user, setUser } = useContext(UserContext)
	const [navbarOpen, setNavbarOpen] = React.useState(false)

	function logout(): void {
		setUser("")
		setNavbarOpen(false)
		alert("You have logged out.")
		navigate("/")
	}

	return (
		<>
			<nav>
				<div className="w-full">
					<div className="flex border-b-2 justify-center px-4 py-8 space-x-5 md:justify-between">
						<div className="flex flex-row navbar space-x-5 px-4 justify-between">
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
							{/* Show hamburger menu in mobile and logged in */}
							{user ? (
								<>
									{navbarOpen ? (
										<div>
											<div
												className="absolute top-0 right-6 px-8 py-8"
												onClick={() =>
													setNavbarOpen(!navbarOpen)
												}>
												<svg
													className="h-8 w-8 text-gray-600"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round">
													<line
														x1="18"
														y1="6"
														x2="6"
														y2="18"
													/>
													<line
														x1="6"
														y1="6"
														x2="18"
														y2="18"
													/>
												</svg>
											</div>
										</div>
									) : (
										<div className="absolute top-0 right-6 px-8 py-8">
											<div
												className="space-y-2 md:hidden"
												onClick={() =>
													setNavbarOpen(!navbarOpen)
												}>
												<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
												<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
												<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
											</div>
										</div>
									)}
								</>
							) : (
								<></>
							)}
						</div>

						<div className="flex flex-row navbar-text justify-end px-4 hidden md:flex">
							{user ? (
								<>
									&#x1F44B; Hi
									<p className="ml-1 font-bold">{user} </p>
									<p className="mx-2"> | </p>
									<a onClick={logout}>Logout</a>
								</>
							) : (
								<p>&#x1F44B; Hi! Please log in!</p>
							)}
						</div>
					</div>

					{navbarOpen ? (
						<div className="mobile-navbar">
							<ul>
								<li>
									<Link to="/track">Track</Link>
								</li>
								<li>
									<Link to="/statistics">Statistics</Link>
								</li>
								<li>
									<a onClick={logout}>Logout</a>
								</li>
							</ul>
						</div>
					) : (
						<></>
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
