
/*
Aqui ta tudo em inglês pq na hr tava mais fácil de pensar assim

Js Related:

X - Generate a random d20 adding the value of the input of clicked perk
- Make changes made by users permanent for them
- make the buttons on the special perks work properly
- make a button to save changes made on the webpage (the button will be on footer)
X - create something to tell if it was a failure, a normal, etc.

Future plans:

- Make a dice roll in front of the screen, or make a lot a numbers appear before the acctual one
or matbe both
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

        // Adição nova para verificar se é Fracasso, Normal, Bom ou Extremo
        function verificar(resultado) {
                alert(`${result} + ${value} = ${result + value} - ${resultado}`)
        }

        // Adição nova para verificar se é Fracasso, Normal, Bom ou Extremo
        // Verificar se é Normal, Bom ou Extremo
        if(result + value < 23) {
                verificar("Fracasso")
        } 
        else if(result + value >= 23 && result + value < 29) {
                verificar("Normal")
        } 
        else if(result + value >= 29 && result + value < 35) {
                verificar("Bom")
        } 
        else {
                verificar("Extremo")
        }
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
let valorPericia = document.querySelectorAll(".pericia-value")
let nomePericia = document.querySelectorAll(".pericia-name")

// função de rolagem de dados
function pericia(valor) {
        nomePericia[valor].onclick = function() {

                // Maluquice só pra eu achar que estou melhorando a aleatoriadade
                jogada = []
                for(f = 1; f <= 50; f += 1) {
                        result = Math.floor(Math.random() * 20) + 1
                        jogada.push(result)
                } 
                jogada = jogada[Math.floor(Math.random() * 50)]
                resultadoFinal = jogada + Number(valorPericia[valor].value)

                // Função para facilitar a verificação
                function verificar(resultado) {
                        alert(`${jogada} + ${Number(valorPericia[valor].value)} = ${resultadoFinal} - ${resultado}`)
                }

                // Verificar se é Normal, Bom ou Extremo
                if(resultadoFinal < 23) {
                        verificar("Fracasso")
                } 
                else if(resultadoFinal >= 23 && resultadoFinal < 29) {
                        verificar("Normal")
                } 
                else if(resultadoFinal >= 29 && resultadoFinal < 35) {
                        verificar("Bom")
                } 
                else {
                        verificar("Extremo")
                }
        }
}

// loop para repetir o comando em todos as pericias
for(n = 0; n < valorPericia.length; n += 1) {
        pericia(n)
}