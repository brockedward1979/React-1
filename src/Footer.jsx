import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="ota_footer  umumiy">
			<div class="footer-container">
				<div class="footer-logo">
					<h2>House Design Gallery</h2>
					<p>
						Klassik va Zamonaviy uy ruhlantiruvchi g'oyalari. Eskirmaydigan
						arxitektura va nafis interyerlar.
					</p>
				</div>

				<div class="footer-links">
					<h3>Tezkor linklar</h3>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Gallery</a>
						</li>
						<li>
							<a href="#">Design Ideas</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>

				<div class="footer-contact">
					<h3>Bog'lanish</h3>
					<div className="ota_info_footer">
						<img
							src="../src/assets/Icons/location.svg"
							alt=""
							className="phone_img"
						/>
						<p>Xorazm, Uzbekistan</p>
						<img
							src="../src/assets/Icons/phone.svg"
							alt=""
							className="phone_img"
						/>
						<a
							href="tel:+998886031218"
							className="tel"
						>
							+998 88 603 12 18
						</a>
						<img
							src="../src/assets/Icons/email.svg"
							alt=""
							className="phone_img"
						/>
						<p className="email">mathematics20222023@gmail.com</p>
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				© 2025 Uy Dizayn Galereyasi. Barcha huquqlar himoyalangan.
			</div>
		</div>
	);
}
