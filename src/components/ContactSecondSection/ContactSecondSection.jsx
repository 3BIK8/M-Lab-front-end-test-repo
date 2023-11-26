import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./ContactSecondSection.css";

function ContactSecondSection() {
	return (
		<>
			<section className="contact-second-section">
				<div className="contact-content">
					<h2 className="section-title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa.
					</h2>
					<ul className="social-media">
						<span className="links">find us in :</span>
						<li className="social">
							<a href="/" className="so1">
								<FaFacebook />
							</a>
						</li>
						<li className="social">
							<a href="/" className="so2">
								<FaInstagram />
							</a>
						</li>
						<li className="social">
							<a href="/" className="so3">
								<FaXTwitter />
							</a>
						</li>
						<li className="social">
							<a href="/" className="so4">
								<FaLinkedin />
							</a>
						</li>
					</ul>
					<hr />
					<ul className="list">
						<span className="links">useful links :</span>
						<li>
							<a href="/">lorem ipsum</a>
						</li>
						<li>
							<a href="/">lorem ipsum dollor</a>
						</li>
						<li>
							<a href="/">lorem emit</a>
						</li>
					</ul>
				</div>
				<ContactForm />
			</section>
		</>
	);
}

export default ContactSecondSection;
