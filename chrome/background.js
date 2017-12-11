var resultImgs = [];

var launch = function(){
  console.log('start of the launch function in background.js line 4');
  //alert("succesful alert at line 5");
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
        file: "content.js"
    });
    
    chrome.tabs.executeScript({//I just commented out this part
        file: "background.js"
    });
    
    chrome.tabs.executeScript({//I just commented out this part
        file: "build/index.js"
    });
    
}
  
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "button"){
      launch();
      sendResponse({farewell: "Debug: You have pressed the on screen button and succesfully communicated with background.js at line 22, the URL of the image you clicked is: " + request.url});
  }});
  
//Used to call HTML overlay Jorge
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
        file: "content.js"
    });
    
    chrome.tabs.executeScript({//I just commented out this part
        file: "background.js"
    });
    
    chrome.tabs.executeScript({//I just commented out this part
        file: "build/index.js"
    });
    
    
    
});