import React from 'react';
import AppBar from 'material-ui/AppBar';

class Home extends React.Component {
	
	render() {
		const style = {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			zIndex: 2147483648,
			width: "100%",
		};
		
		return (
			<div style={style}>
				<AppBar title="Panafold Muthaflippin Appbar"/>
			</div>
		)
	}
}

export default Home;