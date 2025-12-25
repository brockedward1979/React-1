import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import {
	gardenImages,
	exteriorImages,
	kitchenImages,
	livingRoomImages,
	libraryImages,
	officeImages,
	diningRoomImages,
	bedRoomImages,
	bathRoomImages,
	kidsRoomImages,
	streetImages,
} from "./assets/JS fayllar/images";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter basename="/React-1">
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
					<Route
						path="/Dining-room"
						element={<Content images={diningRoomImages} />}
					/>
					<Route
						path="/Bed-room-couples"
						element={<Content images={bedRoomImages} />}
					/>
					<Route
						path="/Bath-room"
						element={<Content images={bathRoomImages} />}
					/>
					<Route
						path="/Kids-room"
						element={<Content images={kidsRoomImages} />}
					/>
					<Route
						path="/Street"
						element={<Content images={streetImages} />}
					/>
					<Route
						path="/"
						element={<Content />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="about"
							element={<About />}
						/>
						<Route
							path="contact"
							element={<Contact />}
						/>
					</Route>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
