var mountains = []
window.onload = function()
{
   
    var updateData = firebase.database().ref("Mountain");
    updateData.on("child_added", function(data, prevChildKey) {
    var data = data.val() 
    mountains.push(data)
  })
  for(var i=0;i<mountains.length;i++)
  {
     if(mountains[i] == sessionStorage.getItem("mountainName"))
     {
         document.getElementById("mountainName").innerHTML = mountains[i].MountainName
     }
  }
}
