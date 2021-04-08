/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/*/

var button = document.querySelector("#filterbutton");         /*Queryselector*/
var element = document.querySelector("#filteropdrachten");    /*Queryselector*/

button.addEventListener("click", function () {                /*Event*/
    element.classList.toggle("yay");                          /*ClassList*/
});
