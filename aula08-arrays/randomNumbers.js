function gerarNumeroAleatorio(){
    const min = parseInt(document.getElementById('min').value)
    const max = parseInt(document.getElementById('max').value)
    
    if (isNaN(min) || isNaN(max)){
        alert("Preencha min ou max com números válidos")
        return null
    }

    let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").textContent = resultado;
    return resultado;
}