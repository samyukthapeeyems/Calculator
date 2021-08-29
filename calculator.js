function display(num){
    document.getElementById("result").value+=num;
}

function solve(){
    var solution=document.getElementById("result").value;
    var res = eval(solution);
    document.getElementById("result").value=res;
}

function erase(){
    document.getElementById("result").value="";
}