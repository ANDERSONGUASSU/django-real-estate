import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<main className="py-3">
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="/properties" element={<PropertiesPage/>}/>
						
						<Route path="/login" element={<LoginPage/>}/>
					</Routes>
					<ToastContainer theme="dark" />
				</main>
				<Footer />

			</Router>
		</>
	);
};

export default App;