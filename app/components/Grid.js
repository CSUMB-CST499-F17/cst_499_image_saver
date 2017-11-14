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
		
		// console.log("=====================")
		// Array
		// 	.from(document.getElementsByTagName('img'))
		// 	.forEach(img => {
		// 		const button = document.createElement('button');
		// 		// button.innnerHTML = "save";
		// 		button.appendChild(document.createTextNode('Save'))
		// 		// button.onclick = () => {}
		// 		button.type = "button"
		// 		button.style.width ="300px"
		// 		button.style['z-index'] ="1101"
		// 		// img.appendChild(button)
        // 
		// 		// document.body.insertBefore(button, img)
		// 		// document.body.appendChild(button)
		// 	})
		
		// for(let i = 0; ...)
		
		// document.body.onclick = () => {
		// 	console.log("bodied!!!!!!!!!!!!!!!!!!s");
		// 	window.alert("alert")
		// }
		return null
		// return (
		// 	<div style={style}>
        // 
		// 		{
		// 			images.map((img, index) => (<Image key={index} src={img.src}/>))
		// 		}
		// 	</div>
		// )
	}
	
}

export default Grid