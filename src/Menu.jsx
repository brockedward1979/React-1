import React from "react";
import "./Menu.css";

import rasm1 from "./assets/Icons/logo.svg";
import rasm2 from "../src/assets/Icons/lupa-1.svg";

export default function Menu() {
	return (
		<ul className="menu  umumiy">
			<img
				src={rasm1}
				alt=""
				className="logo"
			/>
			<li className="itemlar searchbox">
				<button className="qidiruv_button">
					<img
						src={rasm2}
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
