import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // sahifa o'zgarganda scroll boshiga qaytadi
	}, [pathname]);

	return null;
}
