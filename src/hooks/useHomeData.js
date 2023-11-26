import { useEffect, useState } from "react";

const useHomeData = (fileName) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/${fileName}`); // Assuming your data files are in the "public" folder
				const jsonData = await response.json();
				setData(jsonData.homePage);
			} catch (error) {
				console.error(`Error fetching ${fileName} data:`, error);
			}
		};

		fetchData();
	}, [fileName]);

	return data;
};

export default useHomeData;
