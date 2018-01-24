function addAMountain()
{
var mountainName = document.getElementById("mtnName").value;
var mountainLocation = document.getElementById("locationOfTheMountain").value;
var priceOf6AndUnder = document.getElementById("$6AndUnder").value;
var priceOf7to17 = document.getElementById("$7>17").value;
var priceOf18to69 = document.getElementById("$18>69").value;
var priceOfSenior = document.getElementById("$Senior").value;
var skiRentalPrice = document.getElementById("skiPrice").value;
var snowboardRentalPrice = document.getElementById("snowboardPrice").value;
var linkToWebsite = document.getElementById("linkToWebsite").value;
var linkToMap = document.getElementById("linkToMap").value;
var childRating = document.getElementsByName("CF");
var amountOfSnow = document.getElementsByName("SQ");
var foodQuality = document.getElementsByName("FQ");
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
     var fQChecked = foodQuality[i].value;
    }
}
if(crChecked != null && aSChecked != null && fQChecked != null)
    {
    var save = firebase.database().ref('Mountain/').push({
        MountainName : mountainName,
        MountainLocation: mountainLocation,
        priceOf6AndUnder: priceOf6AndUnder,
        priceOf7to17: priceOf7to17,
        priceOf18to69: priceOf18to69,
        priceOfSenior: priceOfSenior,
        ChildFriendly: crChecked,
        AmountOfSnow: aSChecked,
        FoodQuality: fQChecked,
        SkiRentalPrice: skiRentalPrice,
        SnowboardRentalPrice: snowboardRentalPrice,
        LinkToWebsite: linkToWebsite,
        LinkToMap: linkToMap
    });
    var id = save.key
        firebase.database().ref('Mountain/' + id).update({
            identification: id
        })
    firebase.database().ref('Mountain/').update("", function(error) {
        if (error) {
            alert("Data could not be saved." + error);
        } else {
            location.href = "https://jrprogramming.github.io/mountainfinder"
        }
      });
    }

}
