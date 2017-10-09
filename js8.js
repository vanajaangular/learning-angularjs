function formvalidater()
{
    var req=document.getElementById("req").value;
    if(isCorrect(usn))
{
    return true;

}
else
return false;

var exp=/^[1-4][A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9]$/;
if(elem.value.length==0)
{
    alert("usn is empty");
    return true;
}
}
// function isCorrect(elem)
// {
//     var exp=/^[1-4][A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9]$/;
//     if(elem.value.length==0)
//     {
//         alert("usn is empty");
//         return true;
//     }
// }

