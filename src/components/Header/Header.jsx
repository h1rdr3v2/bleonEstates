import React from "react"
import CustomButton from "../CustomButton"
import img_1 from "../../assets/img/img-1.jpg"
import "./index.css"
const Header = () => {
	return (
		<header className="contain">
			<nav>
				<div className="logo">
					<h4>BLEON</h4>
				</div>
				<div>
					<ul className="nav-links">
						<li>
							<a href="/" className="nav-link">
								Home
							</a>
						</li>
						<li>
							<a href="/" className="nav-link">
								About
							</a>
						</li>
						<li>
							<a href="/" className="nav-link">
								Features
							</a>
						</li>
						<li>
							<a href="/" className="nav-link">
								Contact
							</a>
						</li>
						<div className="cta-btns">
							<CustomButton text="Sign Up" />
							<CustomButton text="Sign In" />
						</div>
					</ul>
					<div className="hamburger">
						<svg
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M3.52881 5.5542C3.52881 5.28898 3.63417 5.03463 3.8217 4.84709C4.00924 4.65956 4.26359 4.5542 4.52881 4.5542H16.5288C16.794 4.5542 17.0484 4.65956 17.2359 4.84709C17.4235 5.03463 17.5288 5.28898 17.5288 5.5542C17.5288 5.81942 17.4235 6.07377 17.2359 6.26131C17.0484 6.44884 16.794 6.5542 16.5288 6.5542H4.52881C4.26359 6.5542 4.00924 6.44884 3.8217 6.26131C3.63417 6.07377 3.52881 5.81942 3.52881 5.5542ZM3.52881 10.5542C3.52881 10.289 3.63417 10.0346 3.8217 9.84709C4.00924 9.65956 4.26359 9.5542 4.52881 9.5542H16.5288C16.794 9.5542 17.0484 9.65956 17.2359 9.84709C17.4235 10.0346 17.5288 10.289 17.5288 10.5542C17.5288 10.8194 17.4235 11.0738 17.2359 11.2613C17.0484 11.4488 16.794 11.5542 16.5288 11.5542H4.52881C4.26359 11.5542 4.00924 11.4488 3.8217 11.2613C3.63417 11.0738 3.52881 10.8194 3.52881 10.5542ZM3.52881 15.5542C3.52881 15.289 3.63417 15.0346 3.8217 14.8471C4.00924 14.6596 4.26359 14.5542 4.52881 14.5542H16.5288C16.794 14.5542 17.0484 14.6596 17.2359 14.8471C17.4235 15.0346 17.5288 15.289 17.5288 15.5542C17.5288 15.8194 17.4235 16.0738 17.2359 16.2613C17.0484 16.4488 16.794 16.5542 16.5288 16.5542H4.52881C4.26359 16.5542 4.00924 16.4488 3.8217 16.2613C3.63417 16.0738 3.52881 15.8194 3.52881 15.5542Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</nav>
			<div className="hero">
				<div className="part">
					<div className="hero-text">
						<h1 className="hero--header-title">
							Search for Homes in your Neighborhood
						</h1>
						<p className="hero--header-description">
							Loren ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam quidem, voluptatum, quod, quos
							voluptates voluptatibus voluptatibus voluptatibus
							voluptatibus voluptatibus voluptatibus
						</p>
						<div className="hero-btns">
							<CustomButton text="Get Started" />
							<CustomButton text="Learn More" />
						</div>
					</div>
				</div>
				<div className="part">
					<div className="hero--card-img">
						<img className="card--bg" src={img_1} />
					</div>
					<div className="hero--card-lodge"></div>
				</div>
			</div>
		</header>
	)
}

export default Header
