
/*
Aqui ta tudo em inglês pq na hr tava mais fácil de pensar assim

Js Related:

X - Generate a random d20 adding the value of the input of clicked perk
X - make the buttons on the hidden perks work properly
X - create something to tell if it was a failure, a normal, etc.
- Make configs button to change the theme of the page (colors, font, etc.)
X - Adcionar os atributos a nova forma de jogar dados
X - Pontos de vida e morte
X - Sistema de danos / Jogar dados
- Botão de vantagem e desvangem

Future plans:

- Make a dice roll in front of the screen, or make a lot a numbers appear before the acctual one
or matbe both
- Make changes made by users permanent for them
- make a button to save changes made on the webpage (the button will be on footer)

*/

/*
CSS & HTML Related:

- Make a footer
*/



// Pericias & Atributos


// Pegando cada valor dos inputs e o html dos elementos e transformando-os em arrays
let valorPericia = document.querySelectorAll(".rolagem-value")
let nomePericia = document.querySelectorAll(".rolagem-name")

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
                        alert(`${jogada} + ${Number(valorPericia[valor].value)} = ${resultadoFinal} | ${resultado}`)
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

// Abrir gaveta de pericias

let botaoGaveta = document.querySelectorAll(".down-btn")
let gaveta = document.querySelectorAll(".extra-elements-container")

function abrirGaveta(valor) {
        let modal = true
        botaoGaveta[valor].onclick = function() {
                if(modal === true) {
                        gaveta[valor].style.display = "inline-block"
                        gaveta[valor].style.height = "fit-content"
                        modal = false
                        botaoGaveta[valor].style.transform = "rotate(180deg)"
                } 
                else if(modal === false) {
                        gaveta[valor].style.display = "none"
                        gaveta[valor].style.height = 0
                        modal = true
                        botaoGaveta[valor].style.transform = "rotate(0deg)"
                }
        }
}

for(n = 0; n < botaoGaveta.length; n += 1) {
        abrirGaveta(n)
}

// Sistema de pontos de vida e morte

let vidaMorte = document.querySelector(".vida-morte")
let pontosDeVida
function morrendo() {
        pontosDeVida = document.getElementById("vida")
        if(pontosDeVida.value == "0") {
                vidaMorte.style.display = "flex"
        }
        else {
                vidaMorte.style.display = "none"
        }
}

// Sistema de Danos (Ainda falta adcionar algo que verifique mais de 1 tipo de dado)

let danos = document.querySelectorAll(".damage-value")
let botaoDanos = document.querySelectorAll(".damage-name")

function rolarDano(valor) {
        botaoDanos[valor].onclick = function() {
                let cadaDanos = danos[valor].value
                let diceAmount = cadaDanos.slice(0, cadaDanos.indexOf("d"))
                
                
                if(cadaDanos.indexOf('+') > -1) {

                        let diceSides = cadaDanos.slice(cadaDanos.indexOf("d") + 1, cadaDanos.indexOf("+"))
                        let diceExtra = Number(cadaDanos.slice(cadaDanos.indexOf("+") + 1))
                        let jogada = []
                        let somaJogada = 0

                        for(n = 0; n < Number(diceAmount); n += 1) {
                                jogadaArray = (Math.floor(Math.random() * diceSides) + 1 + diceExtra)
                                jogada.push(jogadaArray)
                                somaJogada += jogadaArray
                        }

                        if(diceAmount > 1) {
                                alert(jogada.join(" + ") + " = " + somaJogada)
                        } else {
                                alert(somaJogada)
                        }
                }
                else {
                        let diceSides = cadaDanos.slice(cadaDanos.indexOf("d") + 1)
                        let jogada = []
                        let somaJogada = 0

                        for(n = 0; n < Number(diceAmount); n += 1) {
                                jogadaArray = (Math.floor(Math.random() * diceSides) + 1)
                                jogada.push(jogadaArray)
                                somaJogada += jogadaArray
                        }

                        if(diceAmount > 1) {
                                alert(jogada.join(" + ") + " = " + somaJogada)
                        } else {
                                alert(somaJogada)
                        }
                }       
        }
}

for(n = 0; n < botaoDanos.length; n += 1) {
        rolarDano(n)
}