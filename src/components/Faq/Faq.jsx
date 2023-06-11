import React, { useState } from "react"

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null)
	const changeState = (index) => {
		setActiveIndex((prevIndex) => {
			if (prevIndex === index) {
				return null
			} else {
				return index
			}
		})
	}
	const faqs = [
		{
			faq: "How Can I Build Equity Into My House?",
			answer: "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
		},
		{
			faq: "How Big Is An Acre?",
			answer: "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
		},
	]
	return (
		<section className="faq contain">
			<h1>FAQ's - Frequently Asked Questions</h1>
			<p>
				As you might imagine, real estate agents field quite a few
				questions every day. People are naturally curious, and it's an
				agent's job to guide.
			</p>
			<div className="faq--cards">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className={`faq--card ${
							activeIndex === index ? "active" : ""
						}`}
					>
						<div className="faq--card-head">
							<h2>{faq.faq}</h2>
							<span
								onClick={() => changeState(index)}
								style={{ fontSize: 34 }}
							>
								+
							</span>
						</div>
						<p className={activeIndex === index ? "active" : ""}>
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Faq
