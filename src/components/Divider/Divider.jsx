import React from "react"

const Divider = () => {
	const styles = {
		divider: {
			height: 100,
			width: "100%",
			backgroundColor: "#fefefe",
		},
	}
	return <div style={styles.divider} className="linedivider"></div>
}

export default Divider
