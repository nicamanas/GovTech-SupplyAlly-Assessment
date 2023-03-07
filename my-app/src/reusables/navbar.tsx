import React, { useContext } from "react"
import { UserContext } from "../App"

function Navbar() {
	const { user } = useContext(UserContext)
	const [navbarOpen, setNavbarOpen] = React.useState(false)

	return (
		<nav className="navbar relative flex flex-wrap items-center justify-between px-2 py-4 mb-3">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
					{/* Website Logo */}
					<a href="#" className="flex py-4 px-2">
						<img
							src={
								process.env.PUBLIC_URL + "/supplyAlly-logo.png"
							}
						/>
					</a>

					<h2>Track</h2>
					<h2>Statistics</h2>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
