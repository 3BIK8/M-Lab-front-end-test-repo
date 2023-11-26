// FirstSection.js
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Header from "../Header/Header";
import "./FirstSection.css";

function FirstSection({ title, quote, backgroundImage, onTranslateClick }) {
	return (
		<div
			className="first"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<Header onTranslateClick={onTranslateClick} />
			<section className="first-section">
				<div className="section-content">
					<h1 className="title">{title}</h1>
				</div>
				<div className="quote">
					<p>{quote}</p>
					<div className="quote-icon">
						<FaQuoteRight />
					</div>
				</div>
			</section>
		</div>
	);
}

export default FirstSection;
