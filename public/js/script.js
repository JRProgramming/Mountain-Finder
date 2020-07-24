let mountains = [];
window.onload = () => {
  fetch('/api')
  .then(response => response.json())
  .then(response => {
    response.forEach(mountain => {
      mountains.push(JSON.parse(mountain));
    })
  });
}
function searchMountain() {
    const ul = document.createElement("ul");
    document.getElementById('results').innerHTML = ''
    ul.setAttribute('id', 'myUL');
    const textfield = document.getElementById("textField").value.toLowerCase();
    mountains.forEach(mountain => {
      if(textfield.length > 2 && mountain.name && mountain.name.toLowerCase().indexOf(textfield) > -1) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const textNode = document.createTextNode(mountain.name);
        a.appendChild(textNode);
        a.href = `/mountain/${mountain.id}`;
        li.appendChild(a);
        ul.appendChild(li);
      }
    });
    document.getElementById('results').appendChild(ul);
}