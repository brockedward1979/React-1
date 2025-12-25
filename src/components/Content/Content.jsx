import React from "react";
import "./Content.css";
import Home from "../../pages/Home/Home";
import { Outlet } from "react-router-dom";

export default function Content({ images = [] }) {
	return (
		<div className="content umumiy">
			{images.length > 0 &&
				images.map((src, i) => (
					<div
						key={i}
						className="katak"
					>
						<img
							src={src}
							alt={`rasm-${i}`}
							loading="lazy"
							className="rasmlar"
						/>
					</div>
				))}
			<Outlet />
		</div>
	);
}
