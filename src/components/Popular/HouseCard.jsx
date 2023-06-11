import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import image from "../../assets/img/room-1.jpg"

const HouseCard = () => {
	return (
		<>
			<div className="popular--card">
				<div className="popular--card--img">
					<img className="card--image" src={image} alt="" />
				</div>
				<div className="popular--card--content">
					<div className="popular--card--content--head">
						<span>
							<svg
								width="15"
								height="18"
								viewBox="0 0 15 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M2.15121 2.26349C3.46403 0.95067 5.2446 0.213135 7.10121 0.213135C8.95782 0.213135 10.7384 0.95067 12.0512 2.26349C13.364 3.57631 14.1016 5.35688 14.1016 7.21349C14.1016 9.0701 13.364 10.8507 12.0512 12.1635L7.10121 17.1135L2.15121 12.1635C1.50113 11.5135 0.985447 10.7418 0.63362 9.89244C0.281792 9.04312 0.100708 8.13281 0.100708 7.21349C0.100708 6.29418 0.281792 5.38387 0.63362 4.53454C0.985447 3.68522 1.50113 2.91351 2.15121 2.26349ZM7.10121 9.21349C7.63165 9.21349 8.14035 9.00278 8.51543 8.6277C8.8905 8.25263 9.10121 7.74392 9.10121 7.21349C9.10121 6.68306 8.8905 6.17435 8.51543 5.79928C8.14035 5.42421 7.63165 5.21349 7.10121 5.21349C6.57078 5.21349 6.06207 5.42421 5.687 5.79928C5.31193 6.17435 5.10121 6.68306 5.10121 7.21349C5.10121 7.74392 5.31193 8.25263 5.687 8.6277C6.06207 9.00278 6.57078 9.21349 7.10121 9.21349Z"
									fill="white"
								/>
							</svg>
						</span>
						<p>Jakarta Barat, USA</p>
					</div>
					<div className="popular--card--content--body">
						<div className="card--icons">
							<span className="icon-size">
								<svg
									width="20"
									height="14"
									viewBox="0 0 20 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19 5.78V3C19 1.35 17.65 0 16 0H12C11.23 0 10.53 0.3 10 0.78C9.47 0.3 8.77 0 8 0H4C2.35 0 1 1.35 1 3V5.78C0.39 6.33 0 7.12 0 8V14H2V12H18V14H20V8C20 7.12 19.61 6.33 19 5.78ZM12 2H16C16.55 2 17 2.45 17 3V5H11V3C11 2.45 11.45 2 12 2ZM3 3C3 2.45 3.45 2 4 2H8C8.55 2 9 2.45 9 3V5H3V3ZM2 10V8C2 7.45 2.45 7 3 7H17C17.55 7 18 7.45 18 8V10H2Z"
										fill="white"
									/>
								</svg>
							</span>
							<p>4 bed</p>
						</div>
						<div className="card--icons">
							<span className="icon-size">
								<svg
									width="24"
									height="20"
									viewBox="0 0 24 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.9999 9.95595L16.9999 9.96857L16.981 6.96862L13.981 6.98755L13.9684 4.98759L18.9683 4.95605L18.9999 9.95595ZM7.01903 13.0316L10.019 13.0127L10.0316 15.0126L5.03169 15.0442L5.00014 10.0443L7.0001 10.0317L7.01903 13.0316ZM21.0566 18.9431L3.05697 19.0567C1.95699 19.0637 1.05133 18.1694 1.04439 17.0694L0.956057 3.06965C0.949117 1.96968 1.84342 1.06401 2.9434 1.05707L20.943 0.943506C22.043 0.936566 22.9487 1.83087 22.9556 2.93085L23.044 16.9306C23.0509 18.0305 22.1566 18.9362 21.0566 18.9431ZM20.9556 2.93347L2.95595 3.04703L3.04441 17.0668L21.0441 16.9532L20.9556 2.93347Z"
										fill="white"
									/>
								</svg>
							</span>
							<p>10x10</p>
						</div>
						<div className="card--icons">
							<span className="icon-size">
								<svg
									width="20"
									height="24"
									viewBox="0 0 52 47"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17 14H16V15V32V33H17H34H35V32V15V14H34H17ZM1 1H51V46H1V1ZM18 31V16H33V31H18Z"
										stroke="white"
										strokeWidth="2"
									/>
								</svg>
							</span>
							<p>1900 S</p>
						</div>
					</div>
					<div className="popular--card--content--footer">
						<CustomButton text="Book Now" />
						<p className="card--content-price">$5,200,000</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default HouseCard
