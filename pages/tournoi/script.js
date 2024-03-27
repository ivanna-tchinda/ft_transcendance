let loginForm = document.getElementById("loginForm");
let launchTornament = document.getElementById("btn-launch-game");
let id = 0;

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

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");

  if (username.value == "") {
    alert("Ensure you input a value in both fields!");
  } 
  else if(checkInput(username) == 1)
  {
    alert("username already used!");
  }
  else {
    addElement(username.value);
    id++;
    username.value = "";
  }
});

function addElement(element)
{
    const newUser = document.createElement("li");
    const newContent = document.createTextNode(element);
    newUser.appendChild(newContent);

    const username = document.getElementById("player-list");
    
    username.appendChild(newUser);

    newUser.setAttribute("id", id);
    newUser.setAttribute("className", element);
}

launchTornament.addEventListener("click", (e) => {
    e.preventDefault();
    if(id % 2 == 1)
        alert("We have to wait for another player to participate");
    else
    {
        let playersArr = [];
        let it = 0;
        while (it < id) {
            playersArr.push(it);
            console.log("i added: " + document.getElementById(it).innerHTML);
            it++;
        }
        console.log(playersArr);
        var player1 = generatePlayer(playersArr);
        console.log("delete: " + player1);
        playersArr.splice(player1, 1);
        console.log(playersArr);
        var player2 = generatePlayer(playersArr);
        console.log("delete: " + player2);
        playersArr.splice(player2, 1);
        console.log(playersArr);

        console.log(document.getElementById(player1).innerHTML + " is going to confront " + document.getElementById(player2).innerHTML);
        
    }
})

var namePlayer = "";

function generatePlayer(arr){
    console.log("length: " + arr.length);
    return(Math.floor(Math.random() * arr.length));
}
