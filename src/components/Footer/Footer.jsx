import './Footer.scss';

const Footer = () => {

	const d = new Date();
	let year = d.getFullYear();

	return (
		<div className="footer">
			&copy; {year} Instagram From META
		</div>
	)
}

export default Footer
