import React from "react";
import { useGlobalContext } from "../context";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

function Navbar() {
	const {
		openSidebar,
		openSubmenu,
		closeSubmenu
	} = useGlobalContext();

	const displaySubmenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		const page = (e.target as HTMLElement).textContent;
		const tempBtn = (e.target as HTMLElement).getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(page, { center, bottom });
	}

	return (
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img
						src={logo}
						alt="stripe"
						className="nav-logo"
					/>
					<button
						className="btn toggle-btn"
						onClick={openSidebar}
					>
						<FaBars/>
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>products</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>developers</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>company</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
}

export default Navbar;
