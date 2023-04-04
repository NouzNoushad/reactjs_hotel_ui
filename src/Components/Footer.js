const Footer = () => {

	const List = [
		{
			'title': 'Nik Hotel',
			'subtitle': 'Copyright 2022 privacy policy',
		},
		{
			'title': 'E-Mail Us',
			'subtitle': 'mail@example.org',
		},
		{
			'title': 'Follow Us',
			'subtitle': 'f g in',
		},
		{
			'title': 'Address',
			'subtitle': 'Vincent Place, Glasgow Dc',
		},
	]
	return ( 
		<footer>
			<div className="container">
				{
					List && List.map((list) => (
					<div className="footer-content" key={list.title}>
						<h5>{list.title}</h5>
						<h6>{list.subtitle}</h6>
					</div>
					))
				}
				
			</div>
		</footer>
	 );
}
 
export default Footer;