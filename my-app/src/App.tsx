import React, { useState } from "react"
import Login from "./components/login"
import "./App.css"
import Navbar from "./reusables/navbar"

export const UserContext = React.createContext({ user: {} })

function App() {
	const [user, setUser] = useState(null)

	return (
		<div className="App">
			<UserContext.Provider value={{ user: {} }}>
				<Navbar />
				<Login />
			</UserContext.Provider>
		</div>
	)
}

export default App
