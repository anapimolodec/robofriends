import React from 'react';
const Scroll = (props) =>{
	return (
		<div style = {{overflowY: "scroll", height: '72vh'}}>
			{props.children}
		</div>
		);
}

export default Scroll;