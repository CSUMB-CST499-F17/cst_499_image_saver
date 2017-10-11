var imgs = Array.prototype.slice.apply(document.getElementsByTagName('img')),
    resultImgs = [];
for (var i = 0; i < imgs.length; i++) {
    //if (imgs[i].src.indexOf('img.gif') !== -1) {
        //console.log(imgs[i].src)
        resultImgs.push(imgs[i]);
        console.log(imgs[i].getAttribute('src'));
    //}
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.requested == "createDiv"){
            //Code to create the div
            sendResponse({confirmation: "Successfully created div"});
        }
    });
    
chrome.extension.sendRequest({matches: imgs}, function(response) {});//Example 2 to send the array to the background page

console.log("This is a test of content.js");
console.log(resultImgs.length);
//console.log(resultImgs[16].getAttribute('src'));

//console.log(resultImgs[0].width);