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
         if(mountains[i] == sessionStorage.getItem("mountainName"))
         {
            document.getElementById("mountainName").innerHTML = mountains[i].MountainName
         }
      }
     }
   })
}
