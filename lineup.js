(function (){

let color;
let hue = 0;
function generatecolor(){
color = Snap.hsl(hue, 100, 50);
hue = (hue + 1) % 360;
setTimeout(generatecolor, 100);

}

generatecolor();

const li = document.querySelectorAll('#lineup li');

for (const item of li.values()) {
item.onmouseover = function () {
this.style.backgroundColor = color;
};

item.onmouseout = function () {
    this.style.backgroundColor = 'transparent';
};

} 
})();