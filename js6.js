function addnumber(){
//      var firstnumber = document.getElementById("firstnumber").value;
  if(firstnumber = " ")
 {
     alert("1st  field is required");
    return;
 }
 if(secondnumber = " ")
 {
     alert("2st  field is required");
    return;
 }
//     firstnumber= parseFloat(firstnumber);
//    secondnumber= parseFLoat(secondnumber);
// }


    
    
    var firstnumber = parseInt(document.getElementById("firstnumber").value);
   var secondnumber = parseInt(document.getElementById("secondnumber").value);
   
     document.getElementById("result").value=firstnumber + secondnumber;
 
    
    if(isNaN(firstnumber)){
        alert("plese give first integer value");
        return;
         }
    if(isNaN(secondnumber)){
        alert("plese give second integer value");
        return;
     }
}


function reverseString(str){
str=str.split("");
str=str.reverse();
str=str.join("");
return str;
}
console.log(reverseString("hello"));




function dofirst(){
    document.write("do first");
    dosecond();

}
function dosecond(){
    document.write("do second");
    
}
dofirst();

/*function blue()
{
    document.bgColor = "blue";
}*/
var blue = function()
{
     document.bgColor="blue";
}
    
    
    function red()
{
    document.bgColor = "red";
}

function green()
{
    document.bgColor = "green";
}