import React, {Component}  from 'react';



// 1) Create a variable that will detect the images on any website (use regex expression)
const background = document.getElementsByTagName('https?:\/\/.*\.(?:png|jpg|bmp');//.map(img => img.src);



// 2) Create a button component using react
class Detect extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {show : true};
    
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick(){
    const {show} = this.state;
    this.setState({show :!show})  
  }
  
  render () {
    return (
      
      <button style = "background: url(/update1.1/cst_499_image_saver/cap_btn.jpg)" 
       onClick = {this.toggleDiv}> </button>) 
       
       function popBtn(){
         
         for(var i = 0; i < background.length; i++){
  
            if(background != null){
    
                {this.state.show && Detect}
             }
        }
         
       }
  }
  
  
  // 3) Attach the button component to the variable that detects the images
  
  
  //4) show the button
    
}

// module.exports = Detect;

// for(var i = 0; i < background.length; i++){
  
//   if(background != null){
    
//     {this.state.show && Detect}
//   }
// }

// function Detect (){
  
//   var buttonStyle = {
//   margin: '10px 10px 10px 0'
// };

// var Button = React.createClass({
  
  
// render:function(){
    
//     return (<button className = "btn btn-default" 
//     style = "background: url(/update1.1/cst_499_image_saver/cap_btn.jpg)"
//     onClick = {this.props.handleClick}>{this.props.label}</button>);
   
//   }
// });


// for(var i = 0; i < background.length; i++){
//   if(background != null){
      
//       module.exports = Button;
//   }
// }
  
// }
  

export default Detect;



// for(var i = 0; i < background.length; i++){
  
//   if(background != null){
    
//     {this.state.show && Detect}
//   }
// }

// function Detect (){
  
//   var buttonStyle = {
//   margin: '10px 10px 10px 0'
// };

// var Button = React.createClass({
  
  
// render:function(){
    
//     return (<button className = "btn btn-default" 
//     style = "background: url(/update1.1/cst_499_image_saver/cap_btn.jpg)"
//     onClick = {this.props.handleClick}>{this.props.label}</button>);
   
//   }
// });


// for(var i = 0; i < background.length; i++){
//   if(background != null){
      
//       module.exports = Button;
//   }
// }
  
// }
  



