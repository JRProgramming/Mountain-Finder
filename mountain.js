var mountains = []
window.onload = function()
{
    var updateData = firebase.database().ref("Mountain");
    updateData.on("child_added", function(data, prevChildKey) {
    var data = data.val() 
    mountains.push(data)
    })
   firebase.database().ref('Mountains/').set("Data is logged", function(error) {
            if (error) {
                  alert("Data could not be saved." + error);
            } else {
                for(var i=0;i<mountains.length;i++)
                {
                    if(mountains[i].MountainName == sessionStorage.getItem("mountainName"))
                    {
                         document.getElementById("mountainName").innerHTML = mountains[i].MountainName
                         document.getElementById("image").src = mountains[i].LinkToMap
                         document.getElementById("amountOfSnow").innerHTML = mountains[i].AmountOfSnow
                         document.getElementById("foodQuality").innerHTML = mountains[i].FoodQuality
                         document.getElementById("childFriendly").innerHTML = mountains[i].ChildFriendly
                         document.getElementById("priceForAdult").innerHTML = mountains[i].priceOf18to69
                         document.getElementById("websiteLink").href = mountains[i].LinkToWebsite
                         document.getElementById("websiteLink").innerHTML = mountains[i].MountainName
                    }
                }
            }
   })
}
 
