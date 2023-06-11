import React from "react"
import FindsCard from "./FindsCard"

const WhatWeDo = () => {
	return (
		<section className="finds contain">
			<h1>What Can We Help You Find?</h1>
			<div className="finds--cards">
				<FindsCard />
				<FindsCard />
				<FindsCard />
			</div>
		</section>
	)
}

export default WhatWeDo
