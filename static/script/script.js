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
  let div = document.createElement("div");
  let webImage = "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/"
  div.classList.add("row");
  for (i in info.data) {
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    div2.classList.add("col");
    img.src = webImage + info.data[i].image.full;
    div2.appendChild(img);
    div.appendChild(div2);
  };
  document.getElementById("info").appendChild(div);
});

