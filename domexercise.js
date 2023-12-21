//in 5 boxes, assign a random color and random background color to each box using dom concept
// document.addEventListener("DOMContentLoaded", function () {
// let rand = Math.floor(Math.random()*100);
// console.log(rand)
// if(rand>=0 && rand<20){
//     let a = document.querySelector("#container1");
//     a.style.color="white";
//     a.style.backgroundColor="red";
// }
// else if(rand>=20 && rand <40){
//     let b = document.querySelector("#container2");
//     b.style.color="tomato";
//     b.style.backgroundColor="gold";
// }
// else if(rand>=40 && rand <60){
//     let c = document.querySelector("#container3");
//     c.style.color="yellow";
//     c.style.backgroundColor="aqua";
// }
// else if(rand>=60 && rand <80){
//     let d = document.querySelector("#container4");
//     d.style.color="tomato";
//     d.style.backgroundColor="gold";
// }
// else {
//     let e = document.querySelector("#container2");
//     e.style.color="tomato";
//     e.style.backgroundColor="gold";
// }
// });
document.addEventListener("DOMContentLoaded", function () {
    function getcolor(){
    let rand1 = Math.floor(Math.random()*255)
    let rand2 = Math.floor(Math.random()*255)
    let rand3 = Math.floor(Math.random()*255)
    return `rgb(${rand1}, ${rand2}, ${rand3})`;
    }
    let ab = document.getElementsByClassName("container");
    for(i=0;i<5;i++){
        ab[i].style.backgroundColor= getcolor();
        ab[i].style.color=getcolor();
    }

});