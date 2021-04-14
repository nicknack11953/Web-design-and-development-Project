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
  loadChampion(info);
});

function loadChampion(info) {
  let ver = info['n'].champion;
  let cdn = info['cdn']; //https://ddragon.leagueoflegends.com/cdn
  let champion = cdn + '/' + ver + '/data/' + l + '/champion/' + championName + '.json';
  console.log(champion);
  readTextFile(champion, function (text) {
    let infoChamp = JSON.parse(text);
    createInfo(infoChamp, ver, cdn);
  });
}

function createInfo(info, ver, cdn) {
  const webImage = cdn + "/" + ver + "/img/champion/"
  console.log(webImage);
  const h1 = document.createElement("H1");
  const img = document.createElement("IMG");
  const p = document.createElement("P");
  const champImg = document.getElementById("champImg");
  const nameChamp = document.getElementById("nameChamp");
  const loreChamp = document.getElementById("loreChamp");
  img.src = webImage + info.data[championName].image.full;
  h1.innerHTML = info.data[championName].name;
  p.innerHTML = info.data[championName].lore;
  champImg.appendChild(img);
  nameChamp.appendChild(h1);
  loreChamp.appendChild(p);
}

// http://ddragon.leagueoflegends.com/cdn/7.23.1/data/th_TH/rune.json