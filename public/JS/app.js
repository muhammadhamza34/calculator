function getvalue(value1){
    var output = document.getElementById("inputvalues")
    output.value += value1;
}
function calculate(){
    var output2 = document.getElementById("inputvalues")
    var solved = output2.value
    output2.value = eval(solved);
}
function delvalues(){
    var del = document.getElementById("inputvalues");
    del.value = "";
}
