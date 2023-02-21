let increbtn = document.getElementById("increasebtn");
let resetbtn = document.getElementById("resetbtn");
let decrebtn = document.getElementById("decreasebtn");
let label = document.getElementById("label");
let count = 0;

increbtn.onclick = function get(){
    count+=1;
    label.innerHTML = count;
}
resetbtn.onclick = function get(){
    count=0;
    label.innerHTML = count;
}
decrebtn.onclick = function get(){
    count-=1;
    label.innerHTML = count;
}
