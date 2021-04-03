let info;

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

//usage:
readTextFile("http://ddragon.leagueoflegends.com/cdn/11.5.1/data/th_TH/champion.json", function (text) {
  info = JSON.parse(text);
  console.log(info.data);
  createListItem(info);
});

function createListItem() {
  const div = document.createElement("DIV");
  const webImage = "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/"
  div.classList.add("row");
  for (i in info.data) {
    const div2 = document.createElement("DIV");
    const img = document.createElement("IMG");
    const label = document.createElement("LABEL")
    label.classList.add("text-center")
    div2.classList.add("col");
    div2.classList.add("cardChar");
    label.innerHTML = i;
    img.src = webImage + info.data[i].image.full;
    div2.appendChild(img);
    div2.appendChild(label);
    div.appendChild(div2);
  };
  document.getElementById("info").appendChild(div);
}