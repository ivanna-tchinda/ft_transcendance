let selectedLanguage = localStorage.getItem("favLanguage");
const languageSelect = document.querySelector("select");
document.addEventListener("DOMContentLoaded", function() {
    // window.confirm()
    languageSelect.value = selectedLanguage;
    setLanguage(languageSelect.value);
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
    }
}

let home_elt = document.getElementById("home-elt");
let match_elt = document.getElementById("match_link");
let ai_elt = document.getElementById("ai_link");
let tournament_elt = document.getElementById("tournament_link");
let title_elt = document.getElementById("title");
let parag_elt = document.getElementById("parag");
let brand = document.getElementById("brand");
languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
})

const setLanguage = (language) => {
    if(language == "fr")
    {
        home_elt.innerText = translations.fr.home;
        match_elt.innerText = translations.fr.match;
        ai_elt.innerText = translations.fr.ia_match;
        tournament_elt.innerText = translations.fr.tournament;
        title_elt.innerText = translations.fr.title;
        parag_elt.innerText = translations.fr.parag;
        brand.innerText = translations.fr.brand;
    }
    else if(language == "en")
    {
        home_elt.innerText = translations.en.home;
        match_elt.innerText = translations.en.match;
        ai_elt.innerText = translations.en.ia_match;
        tournament_elt.innerText = translations.en.tournament;
        title_elt.innerText = translations.en.title;
        parag_elt.innerText = translations.en.parag;
        brand.innerText = translations.en.brand;
    }
    else if(language == "es")
    {
        home_elt.innerText = translations.es.home;
        match_elt.innerText = translations.es.match;
        ai_elt.innerText = translations.es.ia_match;
        tournament_elt.innerText = translations.es.tournament;
        title_elt.innerText = translations.es.title;
        parag_elt.innerText = translations.es.parag;
        brand.innerText = translations.es.brand;
    }
}


function fetchScript(value) {
    var script = document.getElementById('extra_script_js');
    if (script)
        script.src = "/static/" + value;
    else {
        script = document.createElement('script');
        script.src = "/static/" + value;
        script.id = 'extra_script_js';
        var index_script = document.getElementById('script_js');
        index_script.parentNode.insertBefore(script, index_script.nextSibling);
    }
}


