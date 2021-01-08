import React, {Component } from "react";

const Card = ({name, email}) => {
	return (
		<div className = "bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow tc">
			<img alt = 'photo' src ={`https://robohash.org/${name}?100x100`} />
			<div>
				<h2 className ="pa0 ma0"> {name} </h2>
				<p className = "pa0 ma0"> {email} </p>
			</div>
		</div>
	);
}

export default Card;