import React, { Dispatch, SetStateAction, createContext, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./footer"

interface IUserContext {
	user: string
	setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<IUserContext>({
	user: "",
	setUser: () => {},
})

function Layout() {
	const [user, setUser] = useState("")

	return (
		<div className="h-screen flex flex-col">
			<UserContext.Provider value={{ user, setUser }}>
				<Navbar />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</div>
	)
}

export default Layout
