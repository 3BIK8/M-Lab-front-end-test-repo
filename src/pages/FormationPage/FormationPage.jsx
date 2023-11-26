import React, { useState } from "react";

// HomePage Components
import Footer from "../../components/Footer/Footer";

// import useHomeData from "../../hooks/useHomeData";
import useHomeData from "../../hooks/useHomeData";

// HomePage Sections
import FirstSection from "../../components/FirstSection/FirstSection";
import FormationSecondSection from "../../components/FormationSecondSection/FormationSecondSection";

function FormationPage() {
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
			<FormationSecondSection />
			<Footer />
		</>
	);
}

export default FormationPage;
