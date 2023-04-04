import { useState } from "react";

const Gallery = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [roomType, setRoomType] = useState("");
	const [members, setMembers] = useState("");
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	const [comment, setComment] = useState("");

	const roomData = {name, email, phone, roomType, members, fromDate, toDate, comment}

	const handleFormSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:8000/room', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomData),
		}).then(() => {
			console.log("Room Data has been added Successfully");
			setName("");
			setEmail("");
			setPhone(0);
			setRoomType("");
			setMembers("");
			setFromDate("");
			setToDate("");
			setComment("");
		})
	}

	return ( 
		<div className="hero-gallery">
			<div className="container">
				<div className="gallery-details">
					<h2>Our Gallery</h2>
					<img src="/images/mountain-home.jpeg" alt="" />
					<small>prev | next</small>
				</div>
				<div className="book-room">
					<h4>Book a Room</h4>
					<form action="" onSubmit={handleFormSubmit}>
						<input type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value) } />
						<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) }/>
						<input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value) }/>
						<select name="room" id="" placeholder="Room type" value={roomType} onChange={(e) => setRoomType(e.target.value) }>
							<option value="room type" hidden>Room Type</option>
							<option value="single">Single</option>
							<option value="double">Double</option>
							<option value="triple">Triple</option>
							<option value="Quad">Quad</option>
						</select>
						<select name="number" id="" value={members} onChange={(e) => setMembers(e.target.value) }>
							<option value="" hidden>Members</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<input type="date" placeholder="From" name="from" value={fromDate} onChange={(e) => setFromDate(e.target.value) }/>
						<input type="date" placeholder="To" value={toDate} onChange={(e) => setToDate(e.target.value) }/>
						<textarea placeholder="Additional Comment" value={comment} onChange={(e) => setComment(e.target.value) }></textarea>
						<button>Book Now</button>
					</form>
				</div>
			</div>
		</div>
	 );
}
 
export default Gallery;