const More = () => {

	const List = [
		{
			'title': 'Meetings & Events',
			'subtitle': 'August 2022',
		},
		{
			'title': 'Sign up for our guestbook',
			'subtitle': 'To receive special promotions by e-mail',
		},
		{
			'title': 'Hotel Restaurant',
			'subtitle': 'Perfect menu from our cook',
		},
		{
			'title': 'Special promotions',
			'subtitle': 'Getaway packages august 2022',
		},
	]
	return ( 
		<div className="hero-more">
			<div className="container">
				{
					List && List.map((list) => (
						<div className="details" key={list.title}>
							<h3>{list.title}</h3>
							<p>{list.subtitle}</p>
						</div>
					))
				}
			</div>
		</div>
	 );
}
 
export default More;