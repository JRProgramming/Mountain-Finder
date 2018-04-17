var searchSuggestionsLoaded = false
var titleOfMountain = ""
var isSearched = false
var textfield = document.getElementById("textField")
  function searchMountain()
  {
    var mountains = [];
    var updateData = firebase.database().ref("Mountain");
    updateData.on("child_added", function(data, prevChildKey) {
    var data = data.val()
    mountains.push(data.MountainName)
 })
        firebase.database().ref('Mountains/').set("Data is logged", function(error) {
        if (error) {
            alert("Data could not be saved." + error);
        } else {
        if(isSearched == false)
		    {
          var ul = document.createElement("ul")
          ul.setAttribute('id', 'myUL')
          for(var i=0;i<mountains.length;i++)
          {
            var string = mountains[i]
            var li = document.createElement("li");
            var a = document.createElement("a");
            var aTitle = document.createTextNode(string);
            a.appendChild(aTitle)
            li.appendChild(a);
            ul.appendChild(li)
            a.onclick = function() {
              saveVariableIntoStorage(this.innerHTML);
            }
            document.body.appendChild(ul);
          }
          isSearched = true
        }
    var textfield, filter, ul, li, i;
    textfield = document.getElementById("textField");
    filter = textfield.value.toUpperCase();
    li = document.getElementsByTagName("li");
    for (i = 0; i < mountains.length; i++) {
        if (mountains[i].toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
        }
      });

  }
  function saveVariableIntoStorage(a)
  {
    sessionStorage.setItem("mountainName", a)
    location.href = "mountain.html"
  }

  function addAMountain()
  {
	location.href = "addamountain.html"
  }
