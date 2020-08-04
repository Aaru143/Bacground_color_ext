function click(e){
    chrome.tabs.executeScript(null,
                              {code:"document.body.style.backgroundColor='"+ colors[e.target.id] + "'"});
    //closes the popup window
    window.close();
}

document.addEventListener("DOMContentLoaded", function(){
    var divs = document.querySelectorAll("div");
    for(var i=0; i<divs.length; i++){
        divs[i].addEventListener("click", click);
    }
});

var colors = {
    red: "#E74C3C",
    blue: "#3498DB",
    green: "#58D68D",
    yellow: "#F7DC6F",
    purple: "#BB8FCE",
    orange: "#EB984E"
}