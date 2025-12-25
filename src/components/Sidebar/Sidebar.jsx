import React from "react";
import "./Sidebar.css";
import "../Content/Content.css";
import { Link } from "react-router-dom";

import useScrollToTop from "../common/useScrollToTop";

export default function Sidebar() {
	useScrollToTop();

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
					to="/Bed-room-couples"
					className="buttonlar"
				>
					Bedroom
				</Link>
				<Link
					to="/Bath-room"
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
					to="/Street"
					className="buttonlar"
				>
					Street
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
