let calculator = document.getElementsByClassName("calculator");

function adicionarValor(valor) {
    document.getElementById('display').value += valor;    
}

function calcular() {
    let expressao = document.getElementById('display').value;
    if (expressao) {
        try {
            document.getElementById('display').value = eval(expressao);
        } catch (e) {
            alert("Erro na expressão");
        }
    }
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

