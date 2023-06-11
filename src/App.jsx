import React from "react"
import Header from "./components/Header"
import Divider from "./components/Divider"
import "./App.css"
import Popular from "./components/Popular/Popular"
import WhatWeDo from "./components/Services/WhatWeDo"
import PopularStories from "./components/Popular/PopularStories"
import Faq from "./components/Faq/Faq"
import Footer from "./components/Footer"

const App = () => {
	return (
		<>
			<Header />
			<Divider />
			<Popular />
			<Divider />
			<WhatWeDo />
			<Divider />
			<PopularStories />
			<Divider />
			<Faq />
			<Divider />
			<Footer />
		</>
	)
}

export default App
