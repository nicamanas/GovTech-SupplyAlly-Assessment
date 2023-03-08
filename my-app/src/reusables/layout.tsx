import React, { useContext } from "react"
import { UserContext } from "../App"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./footer"

function Layout() {
	const { user } = useContext(UserContext)
	const [navbarOpen, setNavbarOpen] = React.useState(false)

	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
