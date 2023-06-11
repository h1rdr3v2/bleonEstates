import React from "react"
import Header from "./components/Header"
import Divider from "./components/Divider"
import "./App.css"
import Popular from "./components/Popular/Popular"
import WhatWeDo from "./components/Services/WhatWeDo"

const App = () => {
	return (
		<>
			<Header />
			<Divider />
			<Popular />
			<Divider />
			<WhatWeDo />
			<Divider />
		</>
	)
}

export default App
