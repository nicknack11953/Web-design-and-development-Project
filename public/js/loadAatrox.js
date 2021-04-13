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
readTextFile("http://ddragon.leagueoflegends.com/cdn/11.7.1/data/th_TH/champion/Aatrox.json", function (text) {
  info = JSON.parse(text);
  console.log(info);
});

function createListItem() {
  const div = document.createElement("DIV");
  const webImage = "http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/"
  
}
