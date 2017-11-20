
// var resultImgs = [];
// 
// // chrome.tabs.executeScript({//I just commented out this part
// //     code: `document.body.onclick = (ev) => {
// //         const tag = document.elementFromPoint(ev.x,ev.y)
// //         console.log(tag)
// //     }`
// // });
// 
// 
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     for(i=0;i<request.imagesURL.length;i++){
//       resultImgs[i] = request.imagesURL[i];
//     }
//     //resultImgs = request.imagesURL
//     console.log("made it past the variable transmission")
//     sendResponse({farewell:resultImgs[2]});
//   });
// 
// 
// 
// 
// //Used to call HTML overlay Jorge
chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.insertCSS({
        file:"build/bundle.css"
    });

    chrome.tabs.executeScript({
        code: `
            const div = document.createElement('div');
            div.setAttribute("id", "root");
            document.body.appendChild(div);
        `
    });

    chrome.tabs.executeScript({//I just commented out this part
        file: "build/index.js"
    });
});



