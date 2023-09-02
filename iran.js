
/*
Js Related:

- Generate a random d20 adding the value of the input of clicked perk
- Make changes made by users permanent for them
- make the buttons on the special perks work properly
- make a button to save changes made on the webpage (the button will be on footer)

Future plans:

- Make a dice roll in front of the screen, or make a lot a numbers appear before the acctual one
or matbe both
- create something to tell if it was a failure, a normal, etc.
- Make configs button to change the theme of the page (colors, font, etc.)

*/



// Atributos (Forma antiga)

let value;
let result;

// Função da rolagem de dados para atributos
function rolagem(value) {

        value = document.getElementById(value + "-value").value
        value = Number(value)
        
        result = Math.floor(Math.random() * 20) + 1
        alert(result + " + " + value + " = " + (result + value))
}

// Função de pegar os elementos que devem ser clicados
function $(id) {
        return document.getElementById(id + "-name")
}

// Execução das rolagens
$("forca").onclick = function()         { rolagem("forca") }
$("destreza").onclick = function()      { rolagem("destreza")}
$("carisma").onclick = function()       { rolagem("carisma")}
$("inteligencia").onclick = function()  { rolagem("inteligencia")}
$("poder").onclick = function()         { rolagem("poder")}
$("constituicao").onclick = function()  { rolagem("constituicao")}
$("sorte").onclick = function()         { rolagem("sorte")}
$("percepcao").onclick = function()     { rolagem("percepcao")}





// Pericias (Forma nova)


// Pegando cada valor dos inputs e o html dos elementos e transformando-os em arrays
let valorPericia = Array.from(document.getElementsByClassName("pericia-value"))
let nomePericia = Array.from(document.getElementsByClassName("pericia-name"))

// função de rolagem de dados
function pericia(valor) {
        nomePericia[valor].onclick = function() {

                // Maluquice só pra eu achar que estou melhorando a aleatoriadade
                resultadoFinal = []
                for(f = 1; f <= 50; f += 1) {
                        result = Math.floor(Math.random() * 20) + 1
                        resultadoFinal.push(result)
                }

                resultadoFinal = resultadoFinal[Math.floor(Math.random() * 50)]
                alert(resultadoFinal + " + " + valorPericia[valor].value + " = " + (resultadoFinal + Number(valorPericia[valor].value)))
        }
}

// loop para repetir o comando em todos as pericias
for(n = 0; n < valorPericia.length; n += 1) {
        pericia(n)
}