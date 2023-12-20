console.log("ok")
document.addEventListener("DOMContentLoaded", function () {
    console.log("ok");
    let a = document.getElementsByClassName("contain");
    console.log(a);
    document.getElementById("contain1").innerHTML = "hello";
    document.getElementById("contain1").style.backgroundColor = "green";
    document.querySelector("#contain5").style.backgroundColor="blue";
    let z =document.querySelectorAll(".contain");
    console.log(z)
    for(i=0;i<=z.length;i++){
    z[i].style.backgroundColor="gold";
    }
});

