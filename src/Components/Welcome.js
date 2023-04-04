const Welcome = () => {

	const List = [
		{
			'img': '/images/mountain-home.jpeg',
			'title': 'Comfortable',
		},
		{
			'img': '/images/mountain-home.jpeg',
			'title': 'Modern',
		},
		{
			'img': '/images/mountain-home.jpeg',
			'title': 'Available',
		},
		{
			'img': '/images/mountain-home.jpeg',
			'title': 'Luxury',
		},
	]
	return ( 
		<div className="hero-welcome">
			<div className="hero-header">
				<div className="welcome container">
					{
						List && List.map((list) => (
							<div className="welcome-container" key={list.title}>
								<img src={list.img} alt="" />
								<h2>{list.title}</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus sunt totam est qui assumenda.</p>
								<button>More</button>
							</div>
						))
					}
				</div>
			</div>
			<div className="hero-description container">
				<h1>Welcome!</h1>
				<h3>Comfortable hotel of your dreams</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, repellendus quam vel natus repellat tempora dolores inventore dignissimos atque facere fugiat tenetur praesentium. Minima, maxime. Vel tenetur dolorum eligendi. Quibusdam!</p>
			</div>
		</div>
	);
}
 
export default Welcome;