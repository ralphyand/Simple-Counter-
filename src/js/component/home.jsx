import PropTypes from "prop-types";
import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.digitoFour % 10}</div>
			<div className="three">{props.digitoThree % 10}</div>
			<div className="two">{props.digitoTwo % 10}</div>
			<div className="one">{props.digitoOne % 10}</div>
		</div>
	);
};

Home.propTypes = {
	digitoFour: PropTypes.number,
	digitoThree: PropTypes.number,
	digitoTwo: PropTypes.number,
	digitoOne: PropTypes.number,
};

export default Home;
