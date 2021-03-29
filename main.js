var boxbtn = document.getElementById('box');
var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById('no').onclick = function () { boxMove() };
function boxMove() {
    var cao = Math.floor(Math.random() * (h - 200));
    var rong = Math.floor(Math.random() * (w - 300));
    boxbtn.style.top = cao + 'px';
    boxbtn.style.left = rong + 'px';
}
document.getElementById('confirm').onclick = function () {
    alert('Hahahahahahahahaha :)))) ');
}