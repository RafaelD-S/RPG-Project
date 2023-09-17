
/*
Aqui ta tudo em inglês pq na hr tava mais fácil de pensar assim

Js Related:

X - Generate a random d20 adding the value of the input of clicked perk
X - make the buttons on the hidden perks work properly
X - create something to tell if it was a failure, a normal, etc.
- Make a dice roll in front of the screen, or make a lot a numbers appear before the acctual one
or matbe both
- Make configs button to change the theme of the page (colors, font, etc.)
- Adcionar os atributos a nova forma de jogar dados
- Pontos de vida e morte
  > Mudar o nome da classe para algo diferente de pericia-name & pericia-value
  > Adcionar essa classe a todos os atributos e confirmar que funcionem corretamente
  
Future plans:

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