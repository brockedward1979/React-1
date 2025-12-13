import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="ota_sidebar  umumiy">
			<div className="sticky_qilinadigan">
				<Link
					to="/"
					className="buttonlar"
				>
					Interior
				</Link>
				<Link
					to="/"
					className="buttonlar"
				>
					Exterior
				</Link>
				<Link
					to="/"
					className="buttonlar"
				>
					Kitchen
				</Link>
				<Link
					to="/"
					className="buttonlar"
				>
					Living room
				</Link>
				<Link
					to="/"
					className="buttonlar"
				>
					Library
				</Link>
			</div>
		</div>
	);
}
