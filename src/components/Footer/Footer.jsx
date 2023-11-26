/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
	return (
		<footer className="footer">
			<section className="last">
				<div className="footer-image">
					<img src="./assets/M-LAG_MAIN_1.png" alt="logo" />
				</div>
				<ul className="social-media">
					<li className="social">
						<a href="" className="so1">
							<FaFacebook />
						</a>
					</li>
					<li className="social">
						<a href="" className="so2">
							<FaInstagram />
						</a>
					</li>
					<li className="social">
						<a href="" className="so3">
							<FaXTwitter />
						</a>
					</li>
					<li className="social">
						<a href="" className="so4">
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</section>
			<a href="/" className="copy">
				&copy;2023 M-LAB. All rights reserved.
			</a>
		</footer>
	);
};

export default Footer;
