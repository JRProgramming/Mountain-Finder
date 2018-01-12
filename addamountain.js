function addAMountain()
{
var priceOf6AndUnder = document.getElementById("$6AndUnder").value
var priceOf7to17 = document.getElementById("$7>17").value
var priceOf18to69 = document.getElementById("$18>69").value
var priceOfSenior = document.getElementById("$Senior").value
var childRating = document.getElementsByName("CF")
for(i=0;i<childRating.length;i++)
{
    if(childRating[i].checked)
    {
     var cfChecked = childRating[i].value
    }
}
if(cfChecked != null)
    {
    var save = firebase.database().ref('Mountain/').push({
        priceOf6AndUnder: priceOf6AndUnder,
        priceOf7to17: priceOf7to17,
        priceOf18to69: priceOf18to69,
        priceOfSenior: priceOfSenior,
        ChildFriendly: cfChecked
    });
    var id = save.key
        firebase.database().ref('Mountain/' + id).update({
            identification: id
        })
    }

}
