import "./Header.css";
import logo from "./../../assets/logo.png";
import { useState, useEffect } from "react";
import HotelCard from "../HotelCard/HotelCard";
import "./../Main/Main.css";
import arr from "../../stays.json";
import notFound from "./../../assets/notFound.png";

let dValue;

export default function Main() {
	const [display, setDisplay] = useState(false);
	const [dLoc, setDLoc] = useState(true);
	const [dGuest, setDGuest] = useState(false);
	const [loc, setLoc] = useState("Add Location");
	const [hotelCardBody, setHotelCardBody] = useState(
		arr.map((ele, index) => {
			return (
				<HotelCard
					superHost={ele.superHost}
					title={ele.title}
					rating={ele.rating}
					type={ele.type}
					photo={ele.photo}
					beds={ele.beds}
					key={index}
				/>
			);
		})
	);
	const [noofHotel, setNoofHotel] = useState(hotelCardBody.length);
	let [guests, setGuests] = useState("Add guests");
	let [guestsA, setGuestsA] = useState(0);
	let [guestsC, setGuestsC] = useState(0);

	function reset() {
		setGuests("Add guests");
		setLoc("Add Location");
		setGuestsA(0);
		setGuestsC(0);
		setHotelCardBody(
			arr.map((ele, index) => {
				return (
					<HotelCard
						superHost={ele.superHost}
						title={ele.title}
						rating={ele.rating}
						type={ele.type}
						photo={ele.photo}
						beds={ele.beds}
						key={index}
					/>
				);
			})
		);
		setNoofHotel("12+");
	}

	function NotFound() {
		return (
			<div className="notfound">
				<img src={notFound} alt="notFound" />
				<h1>Nothing Found!</h1>
			</div>
		);
	}
	function Topic() {
		return (
			<div className="main">
				<div className="head">
					<h1 className="heading">Stays in Finland</h1>
					<p className="stay">
						{noofHotel > 12 ? "12+" : noofHotel} stays
					</p>
				</div>
				<div className="topic">
					<div className="hotel-body">{hotelCardBody}</div>
				</div>
			</div>
		);
	}

	function callBD() {
		dValue = !display;
		setDisplay(!display);
		if (loc.split(", ")[0] === "Helsinki") {
			const hotelCardBodyArr = arr.filter(function (ele) {
				return ele.city === "Helsinki" && guests <= ele.maxGuests;
			});
			setHotelCardBody(
				hotelCardBodyArr.map((ele, index) => {
					return (
						<HotelCard
							superHost={ele.superHost}
							title={ele.title}
							rating={ele.rating}
							type={ele.type}
							photo={ele.photo}
							beds={ele.beds}
							key={index}
						/>
					);
				})
			);
			setNoofHotel(hotelCardBodyArr.length);
		} else if (loc.split(", ")[0] === "Turku") {
			const hotelCardBodyArr = arr.filter(function (ele) {
				return ele.city === "Turku" && guests <= ele.maxGuests;
			});
			setHotelCardBody(
				hotelCardBodyArr.map((ele, index) => {
					return (
						<HotelCard
							superHost={ele.superHost}
							title={ele.title}
							rating={ele.rating}
							type={ele.type}
							photo={ele.photo}
							beds={ele.beds}
							key={index}
						/>
					);
				})
			);
			setNoofHotel(hotelCardBodyArr.length);
		} else if (loc.split(", ")[0] === "Vaasa") {
			const hotelCardBodyArr = arr.filter(function (ele) {
				return ele.city === "Vaasa" && guests <= ele.maxGuests;
			});
			setHotelCardBody(
				hotelCardBodyArr.map((ele, index) => {
					return (
						<HotelCard
							superHost={ele.superHost}
							title={ele.title}
							rating={ele.rating}
							type={ele.type}
							photo={ele.photo}
							beds={ele.beds}
							key={index}
						/>
					);
				})
			);
			setNoofHotel(hotelCardBodyArr.length);
		} else if (loc.split(", ")[0] === "Oulu") {
			const hotelCardBodyArr = arr.filter(function (ele) {
				return ele.city === "Oulu" && guests <= ele.maxGuests;
			});
			setHotelCardBody(
				hotelCardBodyArr.map((ele, index) => {
					return (
						<HotelCard
							superHost={ele.superHost}
							title={ele.title}
							rating={ele.rating}
							type={ele.type}
							photo={ele.photo}
							beds={ele.beds}
							key={index}
						/>
					);
				})
			);
			setNoofHotel(hotelCardBodyArr.length);
		}
	}

	function call() {
		dValue = !display;
		setDisplay(!display);
	}

	function Locations() {
		return (
			<div className="locations">
				<p
					className="loc-name"
					onClick={() => {
						setLoc("Helsinki, Finland");
					}}
				>
					<span
						className="material-icons-round location_on
"
					>
						location_on
					</span>
					&nbsp; Helsinki, Finland
				</p>
				<p
					className="loc-name"
					onClick={() => setLoc("Turku, Finland")}
				>
					<span
						className="material-icons-round location_on
"
					>
						location_on
					</span>
					&nbsp; Turku, Finland
				</p>
				<p className="loc-name" onClick={() => setLoc("Oulu, Finland")}>
					<span
						className="material-icons-round location_on
"
					>
						location_on
					</span>
					&nbsp; Oulu, Finland
				</p>
				<p
					className="loc-name"
					onClick={() => {
						setLoc("Vaasa, Finland");
					}}
				>
					<span
						className="material-icons-round location_on
"
					>
						location_on
					</span>
					&nbsp; Vaasa, Finland
				</p>
			</div>
		);
	}

	function Guests() {
		return (
			<div className="guests">
				<div className="adult">
					<p className="type">Adults</p>
					<p className="age">Ages 13 or above</p>
					<div className="count">
						<button
							onClick={() => {
								guestsA && setGuestsA(guestsA - 1);
								setGuests(guestsA + guestsC);
							}}
						>
							-
						</button>
						<span>{guestsA}</span>
						<button
							onClick={() => {
								setGuestsA(guestsA + 1);
								setGuests(guestsA + guestsC);
							}}
						>
							+
						</button>
					</div>
				</div>
				<div className="children">
					<p className="type">Children</p>
					<p className="age">Ages 2-12</p>
					<div className="count">
						<button
							onClick={() => {
								setGuests(guestsA + guestsC);
								guestsC && setGuestsC(guestsC - 1);
							}}
						>
							-
						</button>
						<span>{guestsC}</span>
						<button
							onClick={() => {
								setGuests(guestsA + guestsC);
								setGuestsC(guestsC + 1);
							}}
						>
							+
						</button>
					</div>
				</div>
			</div>
		);
	}

	useEffect(() => {
		setGuests(guestsA + guestsC);
	}, [guestsA, guestsC]);

	function BroadHeader() {
		return (
			<div className="broadheader">
				<div className="mobile-display">
					<p className="mobile-heading">Edit your search</p>
					<button
						className="mobile-close material-icons-round close"
						onClick={call}
					>
						close
					</button>
				</div>
				<div className="bsearch">
					<button
						className="bloc"
						onClick={() => {
							setDLoc(true);
							setDGuest(false);
						}}
					>
						<p className="tag">location</p>
						<p className="val">{loc}</p>
					</button>
					<button
						className="bguest"
						onClick={() => {
							setDLoc(false);
							setDGuest(true);
						}}
					>
						<p className="tag">Guests</p>
						<p className="val">
							{!guests ||
							guests === "Add guests" ||
							guests === 0 ||
							guests === "0" ||
							guests === undefined
								? "Add guests"
								: guests + " guests"}
						</p>
					</button>
					<button className="bsrch" onClick={callBD}>
						<span className="material-icons search">search</span>
						&nbsp;Search
					</button>
				</div>
				{dLoc && <Locations />}
				{dGuest && <Guests />}
				<button className=" btn-srch" onClick={callBD}>
					<span className="material-icons search">search</span>
					&nbsp;Search
				</button>
			</div>
		);
	}

	if (dValue) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	return (
		<>
			<div className="header">
				<div className="logo" onClick={reset}>
					<img src={logo} alt="logo" />
				</div>
				<div className="search">
					<button className="loc" onClick={call}>
						{loc}
					</button>
					<button className="guest" onClick={call}>
						{!guests ||
						guests === "Add guests" ||
						guests === 0 ||
						guests === "0" ||
						guests === undefined
							? "Add guests"
							: guests + " guests"}
					</button>
					<button className="srch" onClick={call}>
						<span className="material-icons search">search</span>
					</button>
				</div>
				{display && <BroadHeader />}
			</div>
			{noofHotel !== 0 && <Topic />}
			{noofHotel === 0 && <NotFound />}
		</>
	);
}
