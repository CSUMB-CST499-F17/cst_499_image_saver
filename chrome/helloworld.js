console.log("Hello world!!!!!!")

const button = document.createElement('button');
button.innerHTML = "save";
button.style.width = "96px";
button.style.height = "72px";
button.style.position = "absolute";
button.style.top = "0";
button.style.left = "0";
button.style["z-index"] = "1101";

document.body.appendChild(button)

Array
	.from(document.getElementsByTagName('img'))
	.forEach(img => {
		img.style.border = "5px solid green"
		img.onmouseover = (ev) => {
			// console.log("mouse over", ev);
			// console.log("x %s, y %s", img.x, img.y)
			// console.log("======", img.style.left, img.style.top)
			button.style.top = `${img.y}px`;
			button.style.left = `${img.x}px`;
			// button.x = ev.x;
			// button.y = ev.y;
			// 
			button.onclick = (ev) => {
				console.log("clicked");
				console.log(chrome)
				chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
				  //console.log(response.farewell);
				});
				// show extension
			}
		}
	})