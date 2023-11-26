// HomePage.js
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import useHomeData from "../../hooks/useHomeData";
import FirstSection from "../../components/FirstSection/FirstSection";
import HomeSecondSection from "../../components/HomeSecondSection/HomeSecondSection";
import ParticlesComponent from "../../components/Particles/ParticlesComponent";

import "./HomePage.css";

function HomePage() {
	const [fileName, setFileName] = useState("data.json"); // Default file name
	const homeData = useHomeData(fileName);

	const handleTranslateClick = () => {
		// Toggle between 'data.json' and 'FrData.json' when Translate is clicked
		setFileName((prevFileName) =>
			prevFileName === "data.json" ? "FrData.json" : "data.json"
		);
	};

	return (
		<>
			{homeData && (
				<FirstSection
					title={homeData.firstSection?.sectionTitle}
					quote={homeData.firstSection?.quote}
					backgroundImage={homeData.firstSection?.backgroundImage}
					onTranslateClick={handleTranslateClick}
				/>
			)}

			<div className="third">
				<ParticlesComponent />
				<HomeSecondSection />
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
