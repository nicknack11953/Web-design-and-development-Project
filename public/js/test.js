let l = 'th_TH';
let championName = "Aatrox";

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
readTextFile("https://ddragon.leagueoflegends.com/realms/na.json", function (text) {
  let info = JSON.parse(text);
  let ver = info['n'].champion;
  let cdn = info['cdn']; //https://ddragon.leagueoflegends.com/cdn
  let champion = cdn + '/' + ver + '/data/' + l + '/champion/' + championName + '.json';
});

console.log(champion)