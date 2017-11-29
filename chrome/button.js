console.log("Button test");

const button = document.createElement('button');
// var w; 
// var h; 
button.innerHTML = "save";
//button.innerHTML = '<img src =\'../../../chrome/cap_btn.jpg\'>'; //can't load the image there is a issue on the path or the website can't read it. 
button.style.width = "50px";
button.style.height = "50px";
button.style.position = "absolute";
button.style.top = "0";
button.style.right = "0";
button.style["z-index"] = "1101";

document.body.appendChild(button);

Array.from(document.getElementsByTagName('img'))
.forEach(img=> {
    
    // w = img.width - 5;
    // h = img.height - 5;
    img.style.border = "5px solid green"
    img.onmouseover = (ev) => {
        //console.log("mouse over");
        console.log("x %s, y %s", img.x, img.y);
        console.log("=======", img.style.left, img.style.top);
        button.style.top = `${img.y}px`;
        button.style.right = `${img.x}px`;
        //  button.style.top = img.style.top;
        //  button.style.top = img.style.left;
        // button.x = ev.x;
        // button.y = ev.y;
        
    }
})