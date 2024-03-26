'use strict';
var canvas;
var game;
var anim;
const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 5;


function draw() {
    var context = canvas.getContext('2d');
    // Draw field
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height); //dessiner un rectangle
    // Draw middle line
    context.strokeStyle = 'white';
    context.beginPath(); //point de depart de notre ligne
    //debut
    context.moveTo(canvas.width / 2, 0);
    //fin
    context.lineTo(canvas.width / 2, canvas.height);
    //dessiner la ligne
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


document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('canvas'); //on recupere les donnees du canvas
    game = {
        player: {
            y: canvas.height / 2 - PLAYER_HEIGHT / 2,
            score: 0
        },
        computer: {
            y: canvas.height / 2 - PLAYER_HEIGHT / 2,
            score: 0
        },
        ball: {
            x: canvas.width / 2,
            y: canvas.height / 2,//position de lq bqsse
            r: 5,//rayon de la balle
            speed: {
                x: 2,
                y: 2
            }
        }
    }
    
    function collide(player) {
        // The player does not hit the ball
        if (game.ball.y < player.y || game.ball.y > player.y + PLAYER_HEIGHT) {
            // Set ball and players to the center
            game.ball.x = canvas.width / 2;
            game.ball.y = canvas.height / 2;
            game.player.y = canvas.height / 2 - PLAYER_HEIGHT / 2;
            game.computer.y = canvas.height / 2 - PLAYER_HEIGHT / 2;
            
            // Reset speed
            game.ball.speed.x = 2;
        } else {
            // Increase speed and change direction
            game.ball.speed.x *= -1.2;
            changeDirection(player.y);
        }
        if (player == game.player) {
            game.computer.score++;
            document.querySelector('#computer-score').textContent = game.computer.score;
        } else {
            game.player.score++;
            document.querySelector('#player-score').textContent = game.player.score;
        }
    }

    function changeDirection(playerPosition) {
        var impact = game.ball.y - playerPosition - PLAYER_HEIGHT / 2;
        var ratio = 100 / (PLAYER_HEIGHT / 2);
        // Get a value between 0 and 10
        game.ball.speed.y = Math.round(impact * ratio / 10);
    }

    function ballMove() {
        // Rebounds on top and bottom
        if (game.ball.y > canvas.height || game.ball.y < 0) {
            game.ball.speed.y *= -1;
        }
        
        game.ball.x += game.ball.speed.x;
        game.ball.y += game.ball.speed.y;

        if (game.ball.x > canvas.width - PLAYER_WIDTH) {
            collide(game.computer);
        } else if (game.ball.x < PLAYER_WIDTH) {
            collide(game.player);
        }
    }

    function play() {
        draw();
        computerMove();
        ballMove();
        requestAnimationFrame(play);
    }
    canvas.addEventListener('mousemove', playerMove);

    function playerMove(event) {
        // Get the mouse location in the canvas
        var canvasLocation = canvas.getBoundingClientRect();
        var mouseLocation = event.clientY - canvasLocation.y;
        game.player.y = mouseLocation - PLAYER_HEIGHT / 2;
        if (mouseLocation < PLAYER_HEIGHT / 2) {
            game.player.y = 0;
        } else if (mouseLocation > canvas.height - PLAYER_HEIGHT / 2) {
            game.player.y = canvas.height - PLAYER_HEIGHT;
        } else {
            game.player.y = mouseLocation - PLAYER_HEIGHT / 2;
        }
        
    }

    function computerMove() {
        game.computer.y += game.ball.speed.y * 0.85;
    }

    document.querySelector('#start-game').addEventListener('click', play);
});
