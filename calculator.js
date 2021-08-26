function display(num){
    // var result=document.getElementById("result").value;
    // result += num;
    
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