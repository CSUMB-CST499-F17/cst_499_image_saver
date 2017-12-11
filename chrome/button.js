console.log("Button test");

const button = document.createElement('button');

//button.innerHTML = "Save";
button.style.width = "32px";
button.style.height = "28px";
button.style.position = "absolute";
button.style.top = "0";
button.style.left = "0";
button.style["z-index"] = "1101";
button.style.display = "inline-block";
button.style.borderRadius = "4px";
button.style.backgroundColor = "#186290";
button.style.backgroundImage = 'url("https://static1.squarespace.com/static/58519e11440243de222800ae/t/599f0765893fc0dfd27cc62f/1510279596610/?format=1500w")';
button.style.backgroundSize= "32px";
button.style.border = "none";
button.style.color = "#FFFFFF";
button.style.textAlign = "center";
button.style.fontSize = "12px";
button.style.padding = "5px";
button.style.cursor = "pointer";
button.style.margin = "5px";

document.body.appendChild(button);

Array.from(document.getElementsByTagName('img'))
.forEach(img=> {
    if(img.width >=130 && img.height >=130){
    // w = img.width - 5;
    // h = img.height - 5;
    //img.style.border = "5px solid green"
    img.onmouseover = (ev) => {
        //console.log("mouse over");
        console.log("x %s, y %s", img.x, img.y);
        console.log("=======", img.style.left, img.style.top);
        button.style.top = `${img.y}px`;
        button.style.left = `${img.x}px`;
        button.onclick = () =>{
            console.log("Panafold button click");
            console.log(img.src);
            chrome.runtime.sendMessage({greeting: "button", url: img.src}, function(response) {
            console.log(response.farewell);
        });
            
        }
        //  button.style.top = img.style.top;
        //  button.style.top = img.style.left;
        // button.x = ev.x;
        // button.y = ev.y;
        
    }}
})