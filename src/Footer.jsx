import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import rasm1 from "../src/assets/Icons/location.svg";
import rasm2 from "../src/assets/Icons/phone.svg";
import rasm3 from "../src/assets/Icons/email.svg";

export default function Footer() {
	return (
		<div className="ota_footer  umumiy">
			<div className="footer-container">
				<div className="footer-logo">
					<h2 className="footer-title">House Design Gallery</h2>
					<p>
						Klassik va Zamonaviy uy ruhlantiruvchi g'oyalari. Eskirmaydigan
						arxitektura va nafis interyerlar.
					</p>
				</div>

				<div className="footer-links">
					<h3>Tezkor linklar</h3>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">Gallery</Link>
						</li>
						<li>
							<Link to="/">Design Ideas</Link>
						</li>
						<li>
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-contact">
					<h3>Bog'lanish</h3>
					<div className="ota_info_footer">
						<img
							src={rasm1}
							alt=""
							className="phone_img"
						/>
						<p>Xorazm, Uzbekistan</p>
						<img
							src={rasm2}
							alt=""
							className="phone_img"
						/>
						<Link
							to="tel:+998886031218"
							className="tel"
						>
							+998 88 603 12 18
						</Link>
						<img
							src={rasm3}
							alt=""
							className="phone_img"
						/>
						<p className="email">mathematics20222023@gmail.com</p>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				© 2025 Uy Dizayn Galereyasi. Barcha huquqlar himoyalangan.
			</div>
		</div>
	);
}
