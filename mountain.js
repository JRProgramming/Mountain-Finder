function loadMountain()
{
   var updateData = firebase.database().ref("Mountain");
    updateData.on("child_added", function(data, prevChildKey) {
    var data = data.val() 
    mountains.push(data.MountainName)
  })
}
