function addAMountain()
{
var priceOf6AndUnder = document.getElementById("$6AndUnder").value;
var priceOf7to17 = document.getElementById("$7>17").value;
var priceOf18to69 = document.getElementById("$18>69").value;
var priceOfSenior = document.getElementById("$Senior").value;
var childRating = document.getElementsByName("CF");
var amountOfSnow = document.getElementByNames("SQ");
var foodQuality = document.getElementByNames("FQ");
for(var i=0;i<childRating.length;i++)
{
    if(childRating[i].checked)
    {
     var crChecked = childRating[i].value;
    }
    if(amountOfSnow[i].checked)
    {
     var aSChecked = amountOfSnow[i].value;
    } 
    if(foodQuality[i].checked)
    {
     var foodQuality = foodQuality[i].value;
    }
}
if(crChecked != null)
    {
    var save = firebase.database().ref('Mountain/').push({
        priceOf6AndUnder: priceOf6AndUnder,
        priceOf7to17: priceOf7to17,
        priceOf18to69: priceOf18to69,
        priceOfSenior: priceOfSenior,
        ChildFriendly: crChecked
        AmountOfSnow: aSChecked
    });
    var id = save.key
        firebase.database().ref('Mountain/' + id).update({
            identification: id
        })
    }

}
