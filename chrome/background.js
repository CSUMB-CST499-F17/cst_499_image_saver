//Attempt 4 Acceptance criteria
/*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
  */
//End of attempt 4 acceptance criteria

//Beggining of the rework of attempt 4 in order to get the array passed here and accessible by gridlist

var resultImgs = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    for(i=0;i<request.imagesURL.length;i++){
      resultImgs[i] = request.imagesURL[i];
    }
    //resultImgs = request.imagesURL
    console.log("made it past the variable transmission")
    sendResponse({farewell:resultImgs[2]});
  });
  
//End of rework