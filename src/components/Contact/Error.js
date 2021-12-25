import React, { Component } from 'react';
import { Shake } from 'reshake';

class Error extends Component {

	render(){
		return (
			<div>
				{/* Bouncy Text Effect */}
				<Shake
					h={0}
					v={10}
					r={0}
					dur={300}
					int={50}
					max={100}
					fixed={true}
					fixedStop={false}
					freez={false}>
					{this.props.errorMessage}
				</Shake>
			</div>
		);
	}
}

export default Error;
