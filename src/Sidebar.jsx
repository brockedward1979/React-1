import React from "react";
import "./Sidebar.css";
import "./Content.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
				<Link
					to="/Office"
					className="buttonlar"
				>
					Office
				</Link>
				<Link
					to="/Dining-room"
					className="buttonlar"
				>
					Dining room
				</Link>
				<Link
					to="/Bedroom"
					className="buttonlar"
				>
					Bedroom
				</Link>
				<Link
					to="/Bathroom"
					className="buttonlar"
				>
					Bathroom
				</Link>
				<Link
					to="/Kids-room"
					className="buttonlar"
				>
					Kidsroom
				</Link>
				<Link
					to="/Balcony"
					className="buttonlar"
				>
					Balcony
				</Link>
				<Link
					to="/Patio"
					className="buttonlar"
				>
					Patio
				</Link>
				<Link
					to="/Terrace"
					className="buttonlar"
				>
					Terrace
				</Link>
			</div>
		</div>
	);
}
