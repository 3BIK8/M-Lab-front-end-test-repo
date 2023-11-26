import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaEarthAfrica } from "react-icons/fa6";
import useHeaderData from "../../hooks/useHeaderData";

function Header({ onTranslateClick }) {
	const [fileName, setFileName] = useState("data.json"); // Default file name
	const headerData = useHeaderData(fileName);

	const handleTranslateClick = () => {
		// Toggle between 'data.json' and 'FrData.json' when Translate is clicked
		const newFileName = fileName === "data.json" ? "FrData.json" : "data.json";
		setFileName(newFileName);

		// Call the onTranslateClick callback with the new language
		onTranslateClick(newFileName === "data.json" ? "English" : "Français");
	};

	return (
		<header>
			<nav>
				<div className="logo-container">
					<img src="/assets/M-LAG_MAIN.png" alt="M-lab logo" />
				</div>
				<ul className="nav">
					<li className="nav-link">
						<Link to="/">{headerData?.[0]}</Link>
					</li>
					<li className="nav-link">
						<Link to="/formation">{headerData?.[1]}</Link>
					</li>
					<li className="nav-link">
						<Link to="/contact">{headerData?.[2]}</Link>
					</li>
				</ul>
				<div className="translate" onClick={handleTranslateClick}>
					<FaEarthAfrica />
					<div className="switch">
						{fileName === "data.json" ? "Français" : "English"}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
