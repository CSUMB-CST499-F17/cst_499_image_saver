import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};


var Button = React.createClass({
  
  
render:function(){
    
    return (<button className = "btn btn-default" 
    style = "background: url(/update1.1/cst_499_image_saver/cap_btn.jpg)"
    onClick = {this.props.handleClick}>{this.props.label}</button>);
   
  }
});

module.exports = Button;

'use strict';

const toBytes = s => Array.from(s).map(c => c.charCodeAt(0));
const oxmlContentTypes = toBytes('[Content_Types].xml');
const oxmlRels = toBytes('_rels/.rels');

module.exports = input => {
  const buf = (input instanceof Uint8Array) ? input : new Uint8Array(input);
  
  if(!(buf && buf.length > 1)){
    
    return null;
  }
  
  const check = (header, opts) => {
    
    opts = Object.assign({
            offset: 0
    }, opts);
    
    for(let i = 0; i < header.length; i++){
      
      if(opts.mask){
        
        if(header[i] !==(opts.mask[i] & buf[i + opts.offset])){
          
          return false;
        }
        
        else if(header[i] !== buf[i + opts.offset]){
          return false;
        }
      }
      
      return true;
    };
    
    if(check([0xFF, 0xD8, 0xFF])){
      
      return{
        
        ext: 'jpg',
        mime: 'image /jpeg'
        
      };
    }
    
    if(check([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])){
      
      return {
        
        ext: 'png',
        mime: 'image/png'
      };
    }
    
    if(check([0x47, 0x49, 0x46])){
      
      return{
        ext: 'gif',
        mime: 'image/gif'
      };
    }
    
    if(check([0x42, 0x4D])){
      
      return{
        
        ext:'bmp',
        mime: 'image/bmp'
      };
    }
   
  }
  
  return null;
};