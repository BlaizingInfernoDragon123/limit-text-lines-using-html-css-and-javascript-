function executeFunction(){
    document.getElementById('info').style.height = "auto";
    document.getElementById('reverse').style.display = "none";
    document.getElementById('btn2').style.display = "none";
    document.getElementById('expand').style.display = "block";
    document.getElementById('text2').style.display = "none";
    console.log("Menu has been hidden");
}
function expandMenu(){
    document.getElementById('info').style.height = "auto";
    document.getElementById('expand').style.display = "none";
    document.getElementById('reverse').style.display = "block";
    document.getElementById('btn2').style.display = "block";
    document.getElementById('btn1').className = "check-btn2";
    document.getElementById('text2').style.display = "block";
    console.log("Menu has been opened");

}
function closeMenu(){
   document.getElementById('info').style.height = "initial";
    document.getElementById('expand').style.display = "block";
    document.getElementById('reverse').style.display = "none";
    document.getElementById('btn2').style.display = "none";
    document.getElementById('btn1').className = "check-btn";
    document.getElementById('text2').style.display = "none";
    console.log("Menu has been closed");


}
function Alert(){
    alert("Your form submission is almost ready,Now you will be redirected to any emailing apllication,after that just click on send there and boom you are done!!!")
}
function Reset(){
    alert("The form has been successfully reseted,Continue your typing again!!")
}
