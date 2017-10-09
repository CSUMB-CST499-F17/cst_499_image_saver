import React from 'react';
import AppBar from 'material-ui/AppBar';

class Home extends React.Component {
	
	render() {
		const style = {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		};
		
		return (
			<div style={style}>
				<AppBar title="Panafold"/>
			</div>
		)
	}
}

export default Home;