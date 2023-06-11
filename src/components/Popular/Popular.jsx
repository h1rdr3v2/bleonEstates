import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import HouseCard from "./HouseCard"

const Popular = () => {
	return (
		<section className="popular contain">
			<div className="popular--head">
				<SectionHeader title="Popular" header="Our Popular Residence" />
				<div className="popular--icon--btn">
					<p className="popular--icon--text">
						Explore All{" "}
						<span>
							<svg
								width="21"
								height="11"
								viewBox="0 0 21 11"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.5282 1.41553L19.5282 5.41553M19.5282 5.41553L15.5282 9.41553M19.5282 5.41553H1.5282"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</p>
				</div>
			</div>
			<div className="popular--cards">
				<HouseCard />
				<HouseCard />
				<HouseCard />
			</div>
		</section>
	)
}

export default Popular
