let drawing = false;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', (event) => {
    if (!drawing) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';

    
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);    
});

canvas.addEventListener('mousedown', () => {    
    drawing = true;
});

canvas.addEventListener('mouseup', () => {    
    drawing = false;
    ctx.beginPath();
});

function ClearDrawing(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}