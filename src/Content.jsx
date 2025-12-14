import React from "react";
import "./Content.css";

export default function Content({ images }) {
	return (
		<div className="content umumiy">
			{images.map((src, i) => (
				<div
					key={i}
					className="katak"
				>
					<img
						src={src}
						alt={`rasm-${i}`}
						className="rasmlar"
					/>
				</div>
			))}
		</div>
	);
}
