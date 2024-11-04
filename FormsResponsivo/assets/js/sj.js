
function doTheTrick(){
    let header = document.getElementById("header");
    let title = document.getElementById("title");
    let body = document.getElementById("body");            
    
    let video = document.createElement('div');   
    header.innerText = 'Seu Voto no Mito foi Registrado';     
    video.innerHTML = ' <video class="video col-10 offset-1" autoplay><source src="./assets/js/test.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>'; 
    video.children[0].currentTime = 42.5;        
    document.body.replaceChild(video, body);    
}
    
