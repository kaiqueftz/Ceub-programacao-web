const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20,
        simbolo: "R$"
    },
    dolar: {
        real: 4.99,
        euro: 0.92,
        simbolo: "U$"
    },
    euro: {
        real: 5.40,
        dolar: 1.08,
        simbolo: "EU"
    }
}

const botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click", inverter);

const botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converter);

const botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar);

function limpar() {
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = "";

    let valor = document.getElementById("valorEntrada");
    valorEntrada.value = "";

}

function inverter() {
    let valorMoeda1 = document.getElementById("moeda1").value;
    let valorMoeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = valorMoeda2;
    document.getElementById("moeda2").value = valorMoeda1;
}

function converter() {
    let valorUsuario = document.getElementById("valorEntrada").value;

    if(valorUsuario == 0 || valorUsuario == "") {
        alert("Valor Inválido!")
        return;
    }

    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    if (moeda1 == moeda2) {
        alert("Moedas iguais!!");
        return;
    }

    let simbolo = valoresConversao[moeda2]["simbolo"];
    //console.log(simbolo);

    let resultado = valorUsuario * valoresConversao[moeda1][moeda2];


    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = simbolo + " " + resultado.toFixed(2);

    // Adicionando moedas ao container
    const moedasContainer = document.getElementById("moedas");
    const numeroMoedas = Math.floor(Math.random() * 5) + 1; // Gerando um número aleatório de moedas
    for (let i = 0; i < numeroMoedas; i++) {
        const moeda = document.createElement("div");
        moeda.classList.add("moeda");
        moeda.style.left = `${Math.random() * 90}%`; // Posicionando aleatoriamente na largura do container
        moeda.textContent = "$"; // Adicionando o cifrão como texto dentro da div
        moedasContainer.appendChild(moeda);
    }
}
