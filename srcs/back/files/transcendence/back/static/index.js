// let selectedLanguage = localStorage.getItem("favLanguage");
let lng;
const select = document.querySelector("select");
let languageSelect = document.querySelector("select");
let joueur1 = document.getElementById("joueur1");
let joueur2 = document.getElementById("joueur2");
let btn1 = document.getElementById("start-game");
let btn2 = document.getElementById("stop-game");
let canvas3;
let canvas2;
let btn_start;
let game;
let anim;
let playersArr2;
let launchTornament;
let username;
let btn_participate;
var playerName1;
var playerName2;
let nb_games;
let nextbtn;
let it;
let winnersArr;
let titleOrd;
let titleTour;
let start_game;
let id;
let loginPlayer = document.getElementById("login-player");;
let titlePart = document.getElementById("title-part");
let ord;
const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 5;
const MAX_SPEED = 12;
const setLanguageJeu = (language) => {
    let trslt = translations.fr;
    if(language == "fr")
        trslt = translations.fr;
    else if (language == "en")
        trslt = translations.en;
    else if (language == "es")
        trslt = translations.es;
    home_elt.innerText = trslt.home;
    match_elt.innerText = trslt.match;
    ai_elt.innerText = trslt.ia_match;
    tournament_elt.innerText = trslt.tournament;
    title_elt.innerText = trslt.title;
    parag_elt.innerText = trslt.parag;
    brand.innerText = trslt.brand;
    joueur1.innerText = trslt.joueur1;
    joueur2.innerText = trslt.joueur2;
    btn1.innerText = trslt.start;
    btn2.innerText = trslt.stop;
}


const setLanguageOrd = (language) => {
    titleOrd = document.getElementById("title-ord");
    let trslt = translations.fr;
    if(language == "fr")
        trslt = translations.fr;
    else if (language == "en")
        trslt = translations.en;
    else if (language == "es")
        trslt = translations.es;
    home_elt.innerText = trslt.home;
    match_elt.innerText = trslt.match;
    ai_elt.innerText = trslt.ia_match;
    tournament_elt.innerText = trslt.tournament;
    title_elt.innerText = trslt.title;
    parag_elt.innerText = trslt.parag;
    brand.innerText = trslt.brand;
    titleOrd.innerText = trslt.ord_title;
  }

  const setLanguageTour = (language) => {
    let trslt = translations.fr;
    if(language == "fr")
        trslt = translations.fr;
    else if (language == "en")
        trslt = translations.en;
    else if (language == "es")
        trslt = translations.es;
    home_elt.innerText = trslt.home;
    match_elt.innerText = trslt.match;
    ai_elt.innerText = trslt.ia_match;
    tournament_elt.innerText = trslt.tournament;
    title_elt.innerText = trslt.title;
    parag_elt.innerText = trslt.parag;
    brand.innerText = trslt.brand;
    titleTour.innerText = trslt.title_tournoi;
    titlePart.innerText = trslt.title_part;
    loginPlayer.innerText = trslt.loginPlayer;
    btn_participate.innerText = trslt.btn_part;
    launchTornament.innerText = trslt.btn_launch;
  }

////////////////////////END OF DECLARATIONS////////////////////



document.addEventListener("DOMContentLoaded", function() {
    languageSelect.value = document.cookie.substring(9);
    setLanguage(languageSelect.value);
    document.getElementById('home-elt').addEventListener("click", function(){
        fetch('home/')
        .then(response => response.text())
        .then(text => {
            document.querySelector('#content').innerHTML = text;
        });
    });
    document.getElementById('match_link').addEventListener("click", function(){
        fetch('/jeu/')
        .then(response => response.text())
        .then(text => {
            document.querySelector('#content').innerHTML = text;
        });
        fetchScript("jeu.js");
    });
    document.getElementById('ai_link').addEventListener("click", function(){
        fetch('/ordinateur/')
        .then(response => response.text())
        .then(text => {
            document.querySelector('#content').innerHTML = text;
        });
        fetchScript("ordinateur.js");
    });
    document.getElementById('tournament_link').addEventListener("click", function(){
        fetch('/tournoi/')
        .then(response => response.text())
        .then(text => {
            document.querySelector('#content').innerHTML = text;
        });
        fetchScript("tournoi.js");
    });
    document.getElementById('settings').addEventListener("click", function(){
        fetch('/settings/')
        .then(response => response.text())
        .then(text => {
            document.querySelector('#content').innerHTML = text;
        });
        fetchScript("settings.js");
    });
}); 

function fetchScript(value) {
    var script = document.getElementById('extra_script_js');
    if (script)
        script.remove();
    script = document.createElement('script');
    script.src = "/static/" + value;
    script.id = 'extra_script_js';
    var index_script = document.getElementById('script_js');
    index_script.parentNode.insertBefore(script, index_script.nextSibling);
}






//////////////////TRANSLATION OF THE WEBSITE//////////////////



let home_elt = document.getElementById("home-elt");
let match_elt = document.getElementById("match_link");
let ai_elt = document.getElementById("ai_link");
let tournament_elt = document.getElementById("tournament_link");
let title_elt = document.getElementById("title");
let parag_elt = document.getElementById("parag");
let brand = document.getElementById("brand");
languageSelect.addEventListener("change", (event) => {
    lng = event.target.value;
    setLanguage(event.target.value);
})
const setLanguage = (language) => {
    let trslt = translations.fr;
    if(language == "fr")
        trslt = translations.fr;
    else if (language == "en")
        trslt = translations.en;
    else if (language == "es")
        trslt = translations.es;
    home_elt.innerText = trslt.home;
    match_elt.innerText = trslt.match;
    ai_elt.innerText = trslt.ia_match;
    tournament_elt.innerText = trslt.tournament;
    title_elt.innerText = trslt.title;
    parag_elt.innerText = trslt.parag;
    brand.innerText = trslt.brand;
}






/////////////////////////DICTIONNAIRE//////////////////////////


let translations = {
    fr: {
        home: "Accueil",
        match:"Match",
        ia_match: "Match contre IA",
        tournament: "Tournoi",
        title: "Bienvenue dans le monde de Pong",
        parag: "Ici, vous pouvez jouer au pong contre une IA raisonnable, jouez contre un ami ou défiez un groupe de vos amis pour déterminer qui est le meilleur joueur de pong dans un tournoi épique.",
        brand: "Monde de Pong",
        start: "Démarrer",
        stop:"Arrêter",
        settings: "Parametres",
        sett_title: "Preferences",
        sett_h2: "Choisis ta langue preferee",
        french: "Français",
        english: "Anglais",
        spanish: "Espagnol",
        save: "Enregistrer",
        joueur1: "Joueur 1 :",
        joueur2: "Joueur 2 :",
        ord_title: "ORDINATEUR",
        title_tournoi: "Tournoi",
        title_part: "Participants au tournoi:",
        loginPlayer: "Login du joueur:",
        btn_part: "Participer",
        btn_launch: "Lancer le tournoi"
    },
    en: {
        home: "Home",
        match:"Match",
        ia_match: "AI Match",
        tournament: "Tournament",
        title: "Welcome to the world of Pong",
        parag: "Here you can play pong against a reasonable AI, play against a friend, or challenge a bunch of your friends to determine who is the best pong player in an epic tournament.",
        brand: "World of Pong",
        start: "Start",
        stop:"Stop",
        settings: "Settings",
        sett_title: "Preferences",
        sett_h2: "Choose your preferred language",
        french: "French",
        english: "English",
        spanish: "Spanish",
        save: "Save",
        joueur1: "Player 1 :",
        joueur2: "Player 2 :",
        ord_title: "COMPUTER",
        title_tournoi: "Tournament",
        title_part: "Tournament participants:",
        loginPlayer: "Player Login:",
        btn_part: "Participate",
        btn_launch: "Start the tournament"
    },
    es: {
        home: "Bienvenida",
        match: "Fósforo",
        ia_match: "Partido contra IA",
        tournament: "Torneo",
        title: "Bienvenido al mundo de Pong",
        parag: "Aquí puedes jugar al pong contra una IA razonable, juega contra un amigo o desafía a un grupo de amigos para determinar quién es el mejor jugador de pong en un torneo épico.",
        brand: "Mundo de Pong",
        start: "Comenzar",
        stop: "Detener",
        settings: "Configuraciones",
        sett_title: "Preferencias",
        sett_h2: "Elige tu idioma preferido",
        french: "Francés",
        english: "Inglés",
        spanish: "Espagnol",
        save: "Ahorrar",
        joueur1: "Jugador 1 :",
        joueur2: "Jugador 2 :",
        ord_title: "COMPUTADORA",
        title_tournoi: "Torneo",
        title_part: "Participantes del torneo:",
        loginPlayer: "Inicio de sesión del jugador:",
        btn_part: "Participar",
        btn_launch: "Comenzar el torneo"
    }
}