import React from "react"
import Header from "./components/Header"
import Divider from "./components/Divider"
import "./App.css"
import Popular from "./components/Popular/Popular"
const App = () => {
	return (
		<>
			<Header />
			<Divider />
			<Popular />
			<Divider />
		</>
	)
}

export default App
