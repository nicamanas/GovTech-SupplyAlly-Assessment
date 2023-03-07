import React, { useState } from "react"
import Login from "./components/login"
import "./App.css"
import Navbar from "./reusables/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Track from "./components/track"
import Statistics from "./components/statistics"

export const UserContext = React.createContext({ user: {} })

function App() {
	const [user, setUser] = useState(null)

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Navbar />}>
					<Route
						index
						element={<Login />}
					/>
					<Route
						path="track"
						element={<Track />}
					/>
					<Route
						path="statistics"
						element={<Statistics />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
