import React from "react"
import Login from "./components/login"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Track from "./components/track"
import Statistics from "./components/statistics"
import Layout from "./reusables/layout"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
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
