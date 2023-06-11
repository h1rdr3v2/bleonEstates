import React from "react"
import CardPic from "../../assets/img/img-1.jpg"

const PictureCard = () => {
	return (
		<div className="pc--card-pic">
			<img src={CardPic} />
			<div className="pc--card-body">
				<h3>Editorial House</h3>
				<p>ENG. Ezenwata Destiny, Mouau</p>
			</div>
		</div>
	)
}

export default PictureCard
