import React from "react";
import "./Menu.css";

export default function Menu() {
	return (
		<ul className="menu  umumiy">
			<img
				src="../src/assets/Icons/logo.svg"
				alt=""
				className="logo"
			/>
			<li className="itemlar searchbox">
				<button className="qidiruv_button">
					<img
						src="../src/assets/Icons/lupa-1.svg"
						alt=""
						className="lupa"
					/>
				</button>
				<input
					type="text"
					placeholder="Qidiruv"
					className="qidiruv"
				/>
			</li>

			<div className="linklar_div">
				<li className="itemlar">
					<a
						href="#"
						className="linklar"
					>
						Home
					</a>
				</li>
				<li className="itemlar">
					<a
						href="#"
						className="linklar"
					>
						About
					</a>
				</li>
				<li className="itemlar">
					<a
						href="#"
						className="linklar"
					>
						Contact
					</a>
				</li>
			</div>
		</ul>
	);
}
