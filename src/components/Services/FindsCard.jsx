import React from "react"

const FindsCard = () => {
	return (
		<div className="finds--card">
			<div className="finds--card-svg">
				<svg
					focusable="false"
					aria-hidden="true"
					viewBox="0 0 24 24"
					data-testid="VillaOutlinedIcon"
				>
					<path d="M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"></path>
				</svg>
			</div>
			<div className="finds--card-body">
				<h2>Buy a home</h2>
				<p>
					Loren ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam quidem, voluptatum, quod, quos voluptates
					voluptatibus
				</p>
			</div>
		</div>
	)
}

export default FindsCard
