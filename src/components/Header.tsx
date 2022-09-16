import phoneImg from '../images/phone.svg';
import { useGlobalContext } from "../context";

function Header() {
	const { closeSubmenu } = useGlobalContext();
	return (
		<header
			className="header"
			onMouseOver={closeSubmenu}
		>
			<div className="header-center">
				<article className="header-info">
					<h1>Payments infrastructure for the internet</h1>
					<p>
						Millions of companies of all sizes—from startups to Fortune 500s—use
						Stripe’s software and APIs to accept payments, send payouts, and
						manage their businesses online.
					</p>
					<button className="btn">
						Start now
					</button>
				</article>
				<article className="header-images">
					<img
						src={phoneImg}
						alt="phone"
						className="phone-img"
					/>
				</article>
			</div>
		</header>
	);
}

export default Header;
