

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
            let header = document.getElementById("header");
            let title = document.getElementById("title");
            let calculator = document.getElementById("body");            
            
            let video = document.createElement('div');   
            title.innerText = 'Never Gonna Give You Up!';
            header.innerText = 'Já existe um usuário com este cálculo';     
            video.innerHTML = ' <video class="video" autoplay><source src="Rick Astley - Never Gonna Give You Up (Official Music Video).mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>';            
            document.body.replaceChild(video, calculator);
    }
}

function limparDisplay() {
    document.getElementById('display').value = '';
}
    
