import React from "react"

const SectionHeader = ({ title, header, description = "" }) => {
	return (
		<div className="section--header">
			<h3 className="section--title">{title}</h3>
			<h1 className="section--head">{header}</h1>
			<p className="section--description">{description}</p>
		</div>
	)
}

export default SectionHeader
