var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0, 5)';
c.fillRect(100, 100, 100, 100); // (x좌표, y좌표, 너비, 높이)
