'use strict';
var btn_start;
var canvas;
var game;
var anim;


const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 5;
const MAX_SPEED = 12;


setTimeout(function() {
    btn_start = document.getElementById("start-game");
    canvas = document.getElementById("canvas");
    if (btn_start && canvas) {
        startCanva();
    }
}, 1000);


const translations = {
    fr: {
        home: "Accueil",
        match:"Match",
        ia_match: "Match contre IA",
        tournament: "Tournoi",
        title: "Bienvenue dans le monde de Pong",
        parag: "Ici, vous pouvez jouer au pong contre une IA raisonnable, jouez contre un ami ou défiez un groupe de vos amis pour déterminer qui est le meilleur joueur de pong dans un tournoi épique.",
        brand: "Monde de Pong"
    },
    en: {
        home: "Home",
        match:"Match",
        ia_match: "AI Match",
        tournament: "Tournament",
        title: "Welcome to the world of Pong",
        parag: "Here you can play pong against a reasonable AI, play against a friend, or challenge a bunch of your friends to determine who is the best pong player in an epic tournament.",
        brand: "World of Pong"
    },
    es: {
        home: "Bienvenida",
        match: "Fósforo",
        ia_match: "Partido contra IA",
        tournament: "Torneo",
        title: "Bienvenido al mundo de Pong",
        parag: "Aquí puedes jugar al pong contra una IA razonable, juega contra un amigo o desafía a un grupo de amigos para determinar quién es el mejor jugador de pong en un torneo épico.",
        brand: "Mundo de Pong"
    }
}

const languageSelect = document.querySelector("select");
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

function startCanva() {
    
    game = {
        player: {
            score: 0
        },
        computer: {
            score: 0,
            speedRatio: 0.75
        },
        ball: {
            r: 5,
            speed: {}
        }
    };
    draw();
    reset();
    // Mouse move event
    document.addEventListener('keydown', playerMove);
    document.addEventListener('keydown', player2Move);
    // Mouse click event
    document.querySelector('#start-game').addEventListener('click', play);
    document.querySelector('#stop-game').addEventListener('click', stop);
}

function draw() {
    canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');

    // Draw field
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw middle line
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();

    // Draw players
    context.fillStyle = 'white';
    context.fillRect(0, game.player.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    context.fillRect(canvas.width - PLAYER_WIDTH, game.computer.y, PLAYER_WIDTH, PLAYER_HEIGHT);

    // Draw ball
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    context.fill();
}

function changeDirection(playerPosition) {
    var impact = game.ball.y - playerPosition - PLAYER_HEIGHT / 2;
    var ratio = 100 / (PLAYER_HEIGHT / 2);

    // Get a value between 0 and 10
    game.ball.speed.y = Math.round(impact * ratio / 10);
}

function playerMove(event) 
{
    const canvas = document.getElementById("canvas");
    if(event.code == 'ArrowDown' && game.player.y < canvas.height - PLAYER_HEIGHT)
        game.player.y += 20;
    else if(event.code == 'ArrowUp' && game.player.y > 0)
        game.player.y -= 20;

}

function player2Move(event) 
{
    const canvas = document.getElementById("canvas");
    if(event.code == 'KeyS' && game.computer.y < canvas.height - PLAYER_HEIGHT)
        game.computer.y += 20;
    else if(event.code == 'KeyW' && game.computer.y > 0)
        game.computer.y -= 20;

}

function collide(player) {
    // The player does not hit the ball
    if (game.ball.y < player.y || game.ball.y > player.y + PLAYER_HEIGHT) {
        reset();

        // Update score
        if (player == game.player) {
            game.computer.score++;
            document.querySelector('#computer-score').textContent = game.computer.score;
        } else {
            game.player.score++;
            document.querySelector('#player-score').textContent = game.player.score;
        }
    } else {
        // Change direction
        game.ball.speed.x *= -1;
        changeDirection(player.y);

        // Increase speed if it has not reached max speed
        if (Math.abs(game.ball.speed.x) < MAX_SPEED) {
            game.ball.speed.x *= 1.2;
        }
    }
}

function ballMove() {
    const canvas = document.getElementById("canvas");
    // Rebounds on top and bottom
    if (game.ball.y > canvas.height || game.ball.y < 0) {
        game.ball.speed.y *= -1;
    }

    if (game.ball.x > canvas.width - PLAYER_WIDTH) {
        collide(game.computer);
    } else if (game.ball.x < PLAYER_WIDTH) {
        collide(game.player);
    }

    game.ball.x += game.ball.speed.x;
    game.ball.y += game.ball.speed.y;
}

function play() {
    draw();

    ballMove();

    anim = requestAnimationFrame(play);
}

function reset() {
    const canvas = document.getElementById("canvas");
    // Set ball and players to the center
    game.ball.x = canvas.width / 2;
    game.ball.y = canvas.height / 2;
    game.player.y = canvas.height / 2 - PLAYER_HEIGHT / 2;
    game.computer.y = canvas.height / 2 - PLAYER_HEIGHT / 2;

    // Reset speed
    game.ball.speed.x = 3;
    game.ball.speed.y = Math.random() * 3;
}

function stop() {
    cancelAnimationFrame(anim);
    reset();
    // Init score
    game.computer.score = 0;
    game.player.score = 0;

    document.querySelector('#computer-score').textContent = game.computer.score;
    document.querySelector('#player-score').textContent = game.player.score;

    draw();
}