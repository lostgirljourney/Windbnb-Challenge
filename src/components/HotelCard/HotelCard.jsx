import "./HotelCard.css";

function HotelCard(props) {
	return (
		<div className="hotelcard">
			<img className="card-img" src={props.photo} alt="hotel-pic" />
			<div className="line1">
				<div className="sub-line">
					{props.superHost && <p className="sh">SUPER HOST</p>}
					<p className="type">
						{props.type}
						{props.beds && ` . ${props.beds} beds`}
					</p>
				</div>
				<p className="rate">
					<span className="material-icons-round star_rate">
						star_rate
					</span>
					{props.rating}
				</p>
			</div>
			<p className="desc">{props.title}</p>
		</div>
	);
}

export default HotelCard;
