import React from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
//import {robots} from './robots'; //because we did export without default
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
	constructor() {
		super()
		this.state = {	//sth that can change and lives in parent component
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({robots: users})
			});
	}

	onSearchChange = (event) => { 
		this.setState({searchfield: event.target.value})
	}
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			console.log(filteredRobots);
		});
		if (this.state.robots.length ===0) {
			return <h1 className="tc f1"> Loading...</h1>
			} else {
		return (
			<div className = "tc">
				<h1 className="f1 ma3 pa3"> RoboFriends </h1>
				<SearchBar searchChange = {this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
			);}
	}
}
//STATE(parent)  >> props(child)
//state - object that describes the application
export default App;