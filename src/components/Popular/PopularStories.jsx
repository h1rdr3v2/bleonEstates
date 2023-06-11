import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import PictureCard from "../PictureCards/PictureCard"

const PopularStories = () => {
	return (
		<section className="stories contain">
			<div className="stories--header">
				<SectionHeader
					title="Popular"
					header="Homes For Renty News And Stories"
				/>
			</div>
			<div className="stories--cards">
				<PictureCard />
				<PictureCard />
				<PictureCard />
			</div>
		</section>
	)
}

export default PopularStories
