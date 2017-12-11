var imgs = Array.prototype.slice.apply(document.getElementsByTagName('img')),
    resultImgs = [];
for (var i = 0; i < imgs.length; i++) {//Iterates through the images found on the page
        if(imgs[i].width >=128 && imgs[i].height >=128)//Check the resolution of the image and skip them if they are low-res
        {
                    resultImgs.push(imgs[i].getAttribute('src'));//Adds the images that are found that meet the criteria to the resultImgs array
                    console.log(imgs[i].width);
        }
        else{
            console.log('Small Image: ' + imgs[i].width + "x" +imgs[i].height);
        }
}
/*
function toggleDiv(){
  console.log("testing the toggle div for the button click");
    document.getElementById("myDivId").style.visibility = "hidden";
}

//test.js
//end of test.js

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );

//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild( btn );
//set attributes for div
div.id = 'myDivId';
div.style.zIndex =2147483647;
div.style.position = 'fixed';
div.style.top = '0%';
div.style.left = '0%';
div.style.width = '100%';   
div.style.height = '100%';
div.style.backgroundColor = 'red';
div.style.visibility = 'visible';
//Check to see if the div is visible, if it is, hide it on button click
//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';

btn.onClick = toggleDiv();
    
*/
//document.getElementById('myDivId').style.visibility = 'hidden';

//Attempt 4 ---THIS ONE CAN COMMUNICATE WITH THE BACKGROUND SCRIPT  
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {//This sends a message carrying the text hello
  console.log(response.farewell);
});
//End of attempt 4

//An attempt to utilize attempt 4 in a way that will send an array to background.js. Hopefull this array will then be accessible to gridlistexample
chrome.runtime.sendMessage({imagesURL: resultImgs}, function(response) {
  console.log(response.farewell);
});

//End of rework of attempt 4

