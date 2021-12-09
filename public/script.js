
function generate(){
    var total= document.getElementById("total-gift").value;
    document.getElementById("sec3").innerHTML="";
    for(let i = 0; i < total; i++)
    {
        
        var division=document.createElement("div");
        var DOM_img = document.createElement("img");
        var DOM_txt = document.createElement("p");
        DOM_img.src = "./images/gift.svg";
        DOM_img.width="150";
        DOM_img.height="150";
        DOM_txt.innerHTML=i+1;
        division.appendChild(DOM_txt);
        division.appendChild(DOM_img);
        document.getElementById("sec3").appendChild(division);
        
    }
}