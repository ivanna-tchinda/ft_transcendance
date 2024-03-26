'use strict';
var canvas;
var game;
const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 5;

function draw() {
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
document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('canvas');
    game = {
        player: {
            y: canvas.height / 2 - PLAYER_HEIGHT / 2
        },
        computer: {
            y: canvas.height / 2 - PLAYER_HEIGHT / 2
        },
        ball: {
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: 5
        }
    }
    draw();
});