import React, { useState } from "react";

// AboutPage Components
import Footer from "../../components/Footer/Footer";

import FirstSection from "../../components/FirstSection/FirstSection";

import ParticlesComponent from "../../components/Particles/ParticlesComponent";
import ContactSecondSection from "../../components/ContactSecondSection/ContactSecondSection";
import "./ContactPage.css";

import useHomeData from "../../hooks/useHomeData";

function ContactPage() {
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
				<ContactSecondSection />
			</div>
			<Footer />
		</>
	);
}

export default ContactPage;
