import React from 'react';

class Image extends React.Component {
	
	render() {
		
		const {src} = this.props;
		
		// const src = this.props.src
 		const style = {
			// width: "100%",
			// height: "100%",
			backgroundColor: "pink",
			outline: "1px solid black",
			margin: "10px",
			width: "300px",
			height: "300px"
		}
		return (
			<div style={style}>
				<img src={src} style={{maxWidth: "300px", maxHeight:"300px"}}/>
				<button style={{width: "100px"}}>Save</button>
			</div>
		)
	}
	
}

export default Image