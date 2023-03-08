function clearScreen(){
    document.getElementById("result").value="";
}
function backspace(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value+=value;
}
function calculator(){
var a=document.getElementById("result").value;
document.getElementById("result").value=a;
}
