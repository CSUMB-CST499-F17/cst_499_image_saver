var imgs = Array.prototype.slice.apply(document.getElementsByTagName('img')),
    resultImgs = [];
for (var i = 0; i < imgs.length; i++) {
    //if (imgs[i].src.indexOf('img.gif') !== -1) {
        //console.log(imgs[i].src)
        resultImgs.push(imgs[i].getAttribute('src'));
        console.log(imgs[i].getAttribute('src'));
    //}
}

//Attempt 4 ---THIS ONE CAN COMMUNICATE WITH THE BACKGROUND SCRIPT  
/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {//This sends a message carrying the text hello
  console.log(response.farewell);
});*/
//End of attempt 4

//An attempt to utilize attempt 4 in a way that will send an array to background.js. Hopefull this array will then be accessible to gridlistexample
chrome.runtime.sendMessage({imagesURL: resultImgs}, function(response) {
  console.log(response.farewell);
});

//End of rework of attempt 4
