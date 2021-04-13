let l = 'th_TH';

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
  loadChampions(info);
});

function loadChampions(info) {
  console.log(info['cdn'] + '/' + info['n'].champion + '/data/' + l + '/champion.json');
  let ver = info['n'].champion;
  let cdn = info['cdn']; //https://ddragon.leagueoflegends.com/cdn
  let champion = cdn + '/' + ver + '/data/' + l + '/champion.json';
  readTextFile(champion, function (text) {
    let infoChamp = JSON.parse(text);
    createListItem(infoChamp, ver, cdn);
  });
}

function createListItem(info, ver, cdn) {
  const div = document.createElement("DIV");
  const webImage = cdn + "/"+ ver +"/img/champion/"
  div.classList.add("row");
  console.log(info);
  for(const [key, value] of Object.entries(info.data) ) {
    console.log(`${key}: ${value}`);
    console.log(webImage + value.image.full);
    const div2 = document.createElement("DIV");
    const div3 = document.createElement("DIV");
    const div4 = document.createElement("DIV");
    const img = document.createElement("IMG");
    const label = document.createElement("LABEL");
    div2.id = value.id;
    div2.classList.add("col-sm-2");
    div2.classList.add("col-6");
    div3.classList.add("card");
    div4.classList.add("card-body");
    img.classList.add("card-img-top");
    label.classList.add("card-text");
    div2.style.padding = "1rem";
    //div3.classList.add("cardChar");
    label.innerHTML = value.name;
    img.src = webImage + value.image.full;
    div3.appendChild(img);
    div4.appendChild(label);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div.appendChild(div2);
  };
  document.getElementById("info").appendChild(div);
}

