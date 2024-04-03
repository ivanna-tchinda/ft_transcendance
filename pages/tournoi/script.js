let id = 0;
let nb_games = 0;
let launchTornament;
let username;
let btn_participate;
let loginForm;
let playersArr2;

loadPage();

function loadPage()
{
  console.log("page loading");
  const request = new XMLHttpRequest();
  const scriptRequest = new XMLHttpRequest();
  const container = document.getElementById("container");
  request.open("GET", "pages/tournoi/index.html");
  request.send();
  request.onload = function()
  {
    if(request.status == 200)
      container.innerHTML = request.responseText;
    setTimeout(function() {
      launchTornament = document.getElementById("btn-launch-game");
      btn_participate = document.getElementById("btn-participer");
      loginForm = document.getElementById("loginForm");
      username = document.getElementById("username");
      if (launchTornament && username && btn_participate && loginForm)  {
        loginForm.addEventListener('submit', function(e) {
          participateTournament(e);
        });
        launchTornament.addEventListener('click', function(e) {
          launchTourn(e);
        });
        return;
      }
    }, 1000);
  }  
}

function checkInput(username)
{
    var myLists = document.getElementsByTagName('li');

    for(var i = 0; i < myLists.length; i++)
    {
        if(myLists[i].innerHTML == username.value)
            return 1;
    }
    return 0;
}

function launchTourn(e){
  e.preventDefault();
  if(id % 2 == 1)
    alert("We have to wait for another player to participate");
  else
  {
    if(id < 2)
    {
      alert("We have to wait for another player to participate");
      return;
    }
    let playersArr = [];
    let it = 0;
    while (it < id) {
        playersArr.push(it);
        it++;
    }
    playersArr2 = [];
    while(playersArr.length)
    {
      var player1 = generatePlayer(playersArr, id);
      playersArr.splice(playersArr.indexOf(player1), 1);
      var player2 = generatePlayer(playersArr, id);
      playersArr.splice(playersArr.indexOf(player2), 1);
      console.log(document.getElementById("joueur_" + player1).innerHTML + " is going to confront " + document.getElementById("joueur_" + player2).innerHTML);
      playersArr2.push(["player" + nb_games + "_0"], document.getElementById("joueur_" + player1).innerHTML);
      playersArr2.push(["player" + nb_games + "_1"], document.getElementById("joueur_" + player2).innerHTML);
      nb_games++;
    } 
  }
  if(nb_games)
    begin_tornaments();
}

function participateTournament(e) {
  e.preventDefault();
  if (username.value == "") {
    alert("Ensure you input a value in both fields!");
    return;
  } 
  else if(checkInput(username) == 1)
  {
    alert("username already used!");
    return;

  }
  else {
    addElement(username.value);
    id++;
    username.value = "";
    return;

  }
}


function addElement(element)
{
    const newUser = document.createElement("li");
    const newContent = document.createTextNode(element);
    newUser.appendChild(newContent);

    const username = document.getElementById("player-list");
    
    username.appendChild(newUser);

    newUser.setAttribute("id", "joueur_" + id);
    newUser.setAttribute("className", element);
}


var namePlayer = "";

function isInArr(arr, num)
{
  var i = 0;
  while(arr[i] != null)
  {
    if(arr[i] == num)
      return 1;
    i++;
  }
  return(0);
}

function generatePlayer(arr, id){
    var num = Math.floor(Math.random() * id);
    while(isInArr(arr, num) == 0)
      num = Math.floor(Math.random() * id);;
    return(num);
}

function begin_tornaments() {
  const element = document.getElementById("div-tournoi");
  element.remove();
  console.log(playersArr2);
}
