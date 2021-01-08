import React from 'react';

const SearchBar = ({searchChange}) => {
	return (
		<div className = "pa2">
			<input 
			className = "pa3 ba b--green bg-lightest-blue" 
			type = "search" 
			placeholder = "search robots"
			onChange = {searchChange} // html defined "onChange" if triggered, calls searchChange
			/>
		</div>

		);
}



export default SearchBar;