

function adicionarValor(valor) {
    document.getElementById('display').value += valor;    
}

function calcular() {
    let coin = Math.floor(Math.random() * 2)

    if(coin){
        let expressao = document.getElementById('display').value;
        if (expressao) {
            try {
                document.getElementById('display').value = eval(expressao);
            } catch (e) {
                alert("Erro na expressão");
            }
        }
    }
    else {
            let calculator = document.getElementById("body");            
            
            let video = document.createElement('div');
            video.id = 'componente2';
            video.innerHTML = ' <video class="video" autoplay><source src="Rick Astley - Never Gonna Give You Up (Official Music Video).mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>';            
            document.body.replaceChild(video, calculator);
    }
}

function limparDisplay() {
    document.getElementById('display').value = '';
}
    
