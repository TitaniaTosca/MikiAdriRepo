var text1 = "ide jöhet mindenféle rizsa és ha elég sokat írok sample akkor meg is fog látszani hogy szép e." +
    "ez egy rohadt nagy szövegdoboz lesz a körben valami idézet vagy személyes dolog vagy igazából" +
    "bármi, de vajon jól néz e ki ? talán így fasza lesz, és már csak pár dolgot kell bezsúfolni az" +
    "oldalra";
var text2 = "itt egy másik szöveg, ez rövid";
var text3 = "meg mégegy és nézzük hogy ez jó e, váltogatja e és utána visszamegy-e az elejére?";
var bubble_texts = new Array();
bubble_texts.push(text1);
bubble_texts.push(text2);
bubble_texts.push(text3);
var i = 0;
function iterateBubbleTexts() {
    if (i == 2) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("bubble").innerHTML = bubble_texts[i];
}
setInterval(iterateBubbleTexts, 5000);
iterateBubbleTexts();