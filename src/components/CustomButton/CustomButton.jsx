import React from "react"

const CustomButton = ({ text, type = "" }) => {
	return (
		<>
			<button className={`btn btn_${type}`}>{text}</button>
		</>
	)
}

export default CustomButton
