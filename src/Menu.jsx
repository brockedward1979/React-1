import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

import rasm1 from "./assets/Logotiplar/coffee2.svg";
// import rasm2 from "../src/assets/Icons/lupa-1.svg";

export default function Menu() {
	return (
		<ul className="menu umumiy">
			<img
				src={rasm1}
				alt=""
				className="logo"
			/>

			<div className="linklar_div">
				<li className="itemlar">
					<Link
						to="/"
						className="linklar"
					>
						Home
					</Link>
				</li>
				<li className="itemlar">
					<Link
						to="/"
						className="linklar"
					>
						About
					</Link>
				</li>
				<li className="itemlar">
					<Link
						to="/"
						className="linklar"
					>
						Contact
					</Link>
				</li>
			</div>

			{/* <li className="itemlar searchbox">
				<input
					type="text"
					placeholder="Qidiruv"
					className="qidiruv"
				/>

				<button className="qidiruv_button">
					<img
						src={rasm2}
						alt=""
						className="lupa"
					/>
				</button>
			</li> */}
		</ul>
	);
}
