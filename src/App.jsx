import "./App.css";
import Content from "./Content";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App() {
	return (
		<>
			<div className="ota">
				<Menu />
				<Sidebar />
				<Content />
				<Footer />
			</div>
		</>
	);
}

export default App;
