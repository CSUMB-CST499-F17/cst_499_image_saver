// JavaScript File

//Download a file from a url.

function saveFile(url){
    
    var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
    var xhr = new XMLHttpRequest();
    
    xhr.responseType = 'blob';
    xhr.onload = function(){
        
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response); //xhr.response is a blob
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        //delete a;
        
    }; 
    
    xhr.open('GET', url);
    xhr.send();
    
}