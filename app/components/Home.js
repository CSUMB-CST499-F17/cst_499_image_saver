import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Home extends React.Component {
	
	render() {
		const style = {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			zIndex: 2147483648,
			width: "100%",
			
			
			
		};
		
		function handleTouchTap() {
        //alert('onClick triggered on the title component');
        location.reload();
        
        }
        const styles = {
        title: {
        cursor: 'pointer',
        
  },
};

		
		return (
			<div style={style} >
			<AppBar
    		title={<span style={styles.title}>Panafold</span>}
    		
    		iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    		iconElementRight={<FlatButton label="CLOSE" />}
    		onRightIconButtonTouchTap={handleTouchTap}
			/>
			</div>
		)
	}
}

export default Home;