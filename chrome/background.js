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
    
    chrome.tabs.executeScript({
        file: "build/index.js"
    });
});
