// Testes na bibiloteca

// ID da simbologia, sem espaços.
// Poderá ser obtido atráves do backend, rota fictícia: /siplom-organizacao/simbologia/{id}
// 10061500001202000000 = Carro de combate de força adversa
let symbologiaID = "10061500001202000000".trim();

// Criação da simbologia, e parametros
// Os parametros completos podem ser encontrados nesta URL
// https://raw.githubusercontent.com/spatialillusions/milsymbol/master/src/ms/symbol.js
let symbol = new ms.Symbol(symbologiaID, 
{
    // Tamanho do icone
    size: 50,

    // Sugestões futuras: 
    // Inserir o field direção, para simbolizar a direção do objeto
    // Inserir o field velocidade, para velocidade
    // Inserir o field altitudeDepth, para altitude
    // Inserir o field country, para pais
    // Inserir o field quantity, para simbolizar a quantidade
    // inserir o campo de comentários, para inserir comentarios na figura.
    direction: 90, // 90º graus
    speed: 300,
    altitudeDepth: 50,  
    country: "br",
    quantity: 200,
});

// Converte para SVG e renderiza na DIV.
document.getElementById("SVG-imported").innerHTML = symbol.asSVG();

// teste animado
function testeAnimado() {
  symbol.options.direction = (Math.random() * 360).toFixed(0);
  symbol.options.speed     = (Math.random() * 50).toFixed(0);
  //symbol.options.quantity  = (Math.random() * 1000).toFixed(0);
  symbol.setOptions.apply(symbol, symbol.options)
  document.getElementById("SVG-imported").innerHTML = symbol.asSVG();

  setTimeout(testeAnimado, 1000)
}

// Executar teste animado
testeAnimado()