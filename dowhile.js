function contador() { // declara a função "contador" os parênteses vazios significa que não tem parâmetro para ser enviado ou "coletado"
    const tempo = new Date(); // declaração de variável "tempo" somente leitura, a qual receberá o objeto "Date" do javascript
    
        setTimeout(contador, 1000); // essa linha conta apenas 1 segnudo
        let hora = tempo.getHours(); // declaração de variável "hora" temporária, a qual receberá o retorno do método "getHours"
        let minutos = tempo.getMinutes(); // declaração de variável "minutos"
        let segundos = tempo.getSeconds(); // declaração de variável "segundos"
        
    if (document.getElementById("cbxMarcarTempo").checked == true) { // uma condição que vai validar se o "cbxMarcarTempo" está marcado, se estiver vai executar o que esta presente no bloco de códigos
        document.getElementById("div_hora").innerText = hora + ":"; // pega um elemento (div_hora) e insere um texto.
        document.getElementById("div_minutos").innerText = minutos + ":"; // pega um elemento (div_minutos) e insere um texto.
        document.getElementById("div_segundos").innerText = segundos; // pega um elemento (div_segundos) e insere um texto.
    }

    setInterval(contador, 1000); // essa linha apenas conta 1 segundo
    if (document.getElementById("cbxMarcarTempo").checked == false) { // condição que vai validar se "cbxMarcarTempo" está marcado
        document.getElementById("div_hora").innerText = ""; // pega o elemento (div_hora) e deixa o texto vazio.
        document.getElementById("div_minutos").innerText = ""; // pega o elemento (div_minutos) e deixa o texto vazio.
        document.getElementById("div_segundos").innerText = ""; // pega o elemento (div_segundos) e deixa o texto vazio.
        clearInterval(); // limpa TODOS os elementos "setInterval" 
    }
}

document.getElementById("cbxMarcarTempo").addEventListener('click', () => { // insere o evento de 'click' na checkbox Marcar Tempo
    contador(); //chama a função "contador"
});























//window.setInterval(contador, 1000); // executa infinitamente
//window.setTimeout(contador, 1000); // executa apenas uma vez 