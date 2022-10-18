function mostrarPalavraInvertida() {
    const input = document.querySelector('#word');
    const alert = document.querySelector('#alert');


    const palavra = inverterPalavra(input.value);
    alert.innerHTML = `Palavra Revertida: ${palavra}`;
}

function inverterPalavra(palavra) {
    const a = palavra.split('');
    let invertida = '';
    for(i = (a.length -1); i >= 0; i--){
        invertida += a[i];
    }

    return invertida;
}