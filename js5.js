//function name(){
  //  console.log("vanaja");
    //alert("function is here");
//}
//name();
function addEmailAndDomain(){
    var  email= document.getElementById("email").value;
    var emailpart= email.slice(0,email.indexOf("."));
    var domainpart= email.substring(email.lastIndexOf("."));

    document.getElementById("emailpart").value = emailpart;
    document.getElementById("domainpart").value = domainpart;

}
//http://www.facebook
     //  var name1="vanaja";
       // function stringReverse(str){
         //   var name= "vanaja" + str;
        //}
        //console.log(name)`
function  addnumber(a,b){
    sum= a+b;
    return sum;
}
document.write(addnumber(3,7));