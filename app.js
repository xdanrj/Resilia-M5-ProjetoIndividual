import chalk from 'chalk'
import promptSync from 'prompt-sync';

const prompt = promptSync();

var listaEntradas = []
var loopAtivo = true

while(loopAtivo === true){
    var entrada = prompt(`Insira uma propriedade CSS (digite "SAIR" para sair): `)
    
    if ( !(entrada == "sair" || (entrada == "SAIR")) ) {
        listaEntradas.push(entrada)
    }
    else{
        listaEntradas.sort()
        break
    }
}

console.log("\nLista das propriedades em ordem alfabética: ")

var cor = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'gray', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright']

for(var i=0; i < listaEntradas.length; i++){
        var numeroRandom = Math.floor(Math.random() * 12)
        console.log(chalk[cor[numeroRandom]](listaEntradas[i]))
    }