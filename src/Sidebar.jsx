import React from "react";
import "./Sidebar.css";
import "./Content.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Sidebar() {
	useEffect(() => {
		window.scrollTo(0, 0); // sahifa ochilganda tepaga qaytaradi
	}, []);

	return (
		<div className="ota_sidebar umumiy">
			<div className="sticky_qilinadigan">
				<Link
					to="/Exterior"
					className="buttonlar"
				>
					Exterior
				</Link>
				<Link
					to="/Garden"
					className="buttonlar"
				>
					Garden
				</Link>
				<Link
					to="/Kitchen"
					className="buttonlar"
				>
					Kitchen
				</Link>
				<Link
					to="/Living-room"
					className="buttonlar"
				>
					Living room
				</Link>
				<Link
					to="/Library"
					className="buttonlar"
				>
					Library
				</Link>
			</div>
		</div>
	);
}
