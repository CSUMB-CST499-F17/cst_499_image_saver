import React from 'react';
import Image from './Image';
//import Background from '../update1.1/cst_499_image_saver/app/components/cap_btn.jpg';

const back_ground = Array.from(document.getElementsByTagName('img'))


class Grid extends React.Component {
	
	render() {
		const style = {
			// width: "100%",
			// height: "100%",
			// backgroundColor: "lightgreen",
			// yOverflow: "auto",
			// backgroundImage: `url(${Background})`
			
			button:{
				padding: '1em',
				':hover':{
					border: '1px solid black'
				}
				
			}
		
			
		}
		
		
		
			// .forEach(img => 
			// 	img.style.border = "5px solid green"
				
				for(var i = 0; i < back_ground.length; i++){
					
					back_ground[i].src = <button>Save</button>;
					
				}
				
					
				
			// )
			
			
		//return null // return null in order to not render anything
		
		return (
			<div style={style}>
				
				<button style={{width: "100px"}}>save</button>
			</div>
		)
		
	}
	
}

export default Grid