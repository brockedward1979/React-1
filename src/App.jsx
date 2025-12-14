import "./App.css";
import Content from "./Content";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import {
	gardenImages,
	exteriorImages,
	kitchenImages,
	livingRoomImages,
	libraryImages,
	officeImages,
} from "./images";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="ota">
				<Menu />

				<Sidebar />
				<Routes>
					<Route
						path="/Exterior"
						element={<Content images={exteriorImages} />}
					/>
					<Route
						path="/Garden"
						element={<Content images={gardenImages} />}
					/>
					<Route
						path="/Kitchen"
						element={<Content images={kitchenImages} />}
					/>
					<Route
						path="/Living-room"
						element={<Content images={livingRoomImages} />}
					/>
					<Route
						path="/Library"
						element={<Content images={libraryImages} />}
					/>
					<Route
						path="/Office"
						element={<Content images={officeImages} />}
					/>
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
