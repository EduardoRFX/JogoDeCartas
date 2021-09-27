var carta1 = {
    nome: "Luffy",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/10/luffy-wano.jpg",
    atributos:{
        ataque: 10,
        defesa: 6,
        magia:  4
    }
};
var carta2 = {
    nome: "Roronoa Zoro",
    imagem: "https://img.quizur.com/f/img60a19c79d44559.46106965.png?lastEdited=1621204197",
    atributos:{
        ataque: 9,
        defesa: 8,
        magia: 4
    }
};
var carta3 = {
    nome: "Nami",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/nami-one-piece-wano_k5uy.jpg",
    atributos:{
        ataque: 7,
        defesa: 5,
        magia: 8
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    var numeroCartaJogador = parseInt(Math.random() * 3);

    while (numeroCartaMaquina == numeroCartaJogador){
        var numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
     //exibição dos atributos na tela
    // var elementoExibir = document.getElementById("exibirAtributo");
    // elementoExibir.innerHTML += "Sua carta <br>";
    // elementoExibir.innerHTML += "Nome da Carta: " + cartaJogador.nome + "<br>";
    // elementoExibir.innerHTML += "Ataque da Carta: " + cartaJogador.atributos.ataque + "<br>";
    // elementoExibir.innerHTML += "Defesa da Carta: " + cartaJogador.atributos.defesa + "<br>";
    // elementoExibir.innerHTML += "Magia da Carta: " + cartaJogador.atributos.magia + "<br>";


    //Exibir carta com moldura
    var divCartaJogador = document.getElementById("exibirAtributo");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    //var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    // exibirOpcoes()
}
//console.log(carta1.atributos.ataque);

// function exibirOpcoes() {
//     var opcoes = document.getElementById("opcoes");
//     var opcoesTexto = "";

//     for (var atributo in cartaJogador.atributos){
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;

//     }
//     opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributosSelecionados(){
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributosSelecionados();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    //exibição dos atributos na tela
    // var elementoExibir = document.getElementById("exibirAtributoMaquina");
    // elementoExibir.innerHTML += "A carta da Maquina <br>";
    // elementoExibir.innerHTML += "Nome da Carta: " + cartaMaquina.nome + "<br>";
    // elementoExibir.innerHTML += "Ataque da Carta: " + cartaMaquina.atributos.ataque + "<br>";
    // elementoExibir.innerHTML += "Defesa da Carta: " + cartaMaquina.atributos.defesa + "<br>";
    // elementoExibir.innerHTML += "Magia da Carta: " + cartaMaquina.atributos.magia + "<br>";

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você Venceu &#x1F3C6";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você Perdeu!!, a carta da maquina é maior";
    }else {
        elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);

    exibirCartaMaquina();   
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("exibirAtributoMaquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    //var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML =  moldura + nome + tagHTML + opcoesTexto + "</div>";
}