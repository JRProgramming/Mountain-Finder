var priceOf6AndUnder = document.getElementById("$6AndUnder").value
var priceOf7to17 = document.getElementById("$7-17").value
var priceof18to69 = document.getElementById("$18-69").value
var priceOfSenior = document.getElementById("$Senior").value
var childFriendly = document.getElementByName("CF")
var childFriendlySelected;
function addAMountain()
{
alert(priceOf6AndUnder)
alert(priceOf7to17)
alert(priceOf18to69)
alert(priceOfSenior)
for(i=0;i<childFriendly.length;i++)
{
    if(childFriendly[i].checked)
    {
        childFriendlySelected = childFriendly[i].value
    }
}
alert(childFriendlySelected)
}
