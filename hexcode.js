var mainElements=document.getElementsByClassName("main");
console.log(mainElements[0]);
var obj={
    0:"#1ABC9C",
    1:"#2E86C1",
    2:"#CB4335",
    3:"#76448A",
    4:"#CD6155",
    5:"#784212",
    6:"#2ECC71",
    7:"#1B4F72",
    8:"#4A235A",
    9:"#212F3D",
}
for(let i=0;i<10;i++)
{
    var colorElement=document.createElement("div");
    var text=document.createElement("div");
    text.classList.add("textstyle");
    colorElement.appendChild(text);
    var createButton=document.createElement("button");
    createButton.innerText="Click Me";
    createButton.classList.add("buttonStyle");
    colorElement.appendChild(createButton);
    colorElement.classList.add("colors");
    colorElement.style.backgroundColor=obj[i];
    mainElements[0].appendChild(colorElement);
}
var colorOperation=document.getElementsByClassName("buttonStyle");

for(let i=0;i<colorOperation.length;i++)
{
    colorOperation[i].addEventListener("click",function()
    {
        console.log("clicked");
        document.body.style.backgroundColor=obj[i];
        console.log(obj[i]);
        // text.style.height="10px";
        // text.style.width="10px";
        // colorOperation.child.style.backgroundColor="pink";
        // colorElement[i]..innerText="";
        removetext();
        mainElements[0].children[i].children[0].innerText="Hex Code : "+obj[i];
    });
}
function removetext()
{
    for(let i=0;i<colorOperation.length;i++)
    {
        mainElements[0].children[i].children[0].innerText="";
    }
}