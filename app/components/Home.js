import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
	
	render() {
		const style = {
			
			title: {
			 textColor: "#000000",	
			},
			
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
        
        function handleTouchTap2() {
        //alert('onClick triggered on the title component');
        window.location.href = "https://panafold.co/"
        
        }
        const styles = {
        title: {
        cursor: 'pointer',
        
  },
};

		
		return (
			<div style={style} >
			<AppBar style={{backgroundColor: "#434040"}}
    		title={<span style={styles.title}>Panafold</span>}
    		onTitleTouchTap={handleTouchTap2}
    		iconElementRight={<RaisedButton label="CLOSE" />}
    		onRightIconButtonTouchTap={handleTouchTap}
    	
			/>
			</div>
		)
	}
}

export default Home;