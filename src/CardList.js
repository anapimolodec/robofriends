import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { //this an array of cards
	return (
		<div>
	 		{robots.map((user,i) => {
		 		return (<Card 
		 			key = {i}
		 			id={robots[i].id} 
		 			name={robots[i].name} 
		 			email={robots[i].email}/>);
		// const cardComp = ((robots,i) => {
		// 	for (i=0;i<robots.length; i++) {
		// 		return <Card key ={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
		// 	}
				})}
	 	</div>
		);
}

export default CardList;