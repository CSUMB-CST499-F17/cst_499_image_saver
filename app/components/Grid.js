import React from 'react';
import Image from './Image';


class Grid extends React.Component {
	
	render() {
		const style = {
			width: "100%",
			height: "100%",
			backgroundColor: "lightgreen",
			yOverflow: "auto"
		}
		
		Array
			.from(document.getElementsByTagName('img'))
			.forEach(img => 
				img.style.border = "5px solid green"
			})
		return null // return null in order to not render anything
	}
	
}

export default Grid