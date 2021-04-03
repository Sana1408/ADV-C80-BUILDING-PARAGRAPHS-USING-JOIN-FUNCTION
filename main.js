
function getparagraph1(){
    var inputsarray=[];

    for(var i = 1 ; i <= 6 ; i++)
    {
        inputsarray.push(document.getElementById("para1_input_box_" + i).Value);
    }
    var inputsarray = inputsarray.join(". ");
    document.getElementById("showparagraph1").innerHTML = inputsarray.join(". ");

}

