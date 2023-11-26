// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/ContactPage/ContactPage";
import FormationPage from "./pages/FormationPage/FormationPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/formation" element={<FormationPage />} />
			</Routes>
		</Router>
	);
}

export default App;
