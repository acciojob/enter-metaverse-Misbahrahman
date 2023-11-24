//your JS code here. If required.

function change() {

    let ele = document.getElementById("status");
    
    let newEle = document.createElement("h1");
    newEle.innerText = "Entered Metaverse";
	newEle.id = "status";

    let btn = document.getElementById("enterBtn");
    let parent = btn.parentElement;

    parent.removeChild(ele);

    parent.insertBefore(newEle , btn);

}



