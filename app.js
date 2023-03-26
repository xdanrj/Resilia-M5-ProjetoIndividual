import chalk from 'chalk'
import promptSync from 'prompt-sync';
const prompt = promptSync();

let listaEntradas = []

function corAleatoria(item) {
    const cor = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'gray', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright']
    let numeroRandom = Math.floor(Math.random() * 12)
    return chalk[cor[numeroRandom]](item)
}

while (true) {
    let entrada = prompt(corAleatoria(`Insira uma propriedade CSS (digite "SAIR" para sair): `))
    if (entrada.localeCompare("sair", undefined, { sensitivity: 'accent' }) != 0) {
        listaEntradas.push(entrada)
    }
    else {
        listaEntradas.sort()
        break
    }
}
console.log(corAleatoria("\nLista das propriedades em ordem alfabética: "))
if (listaEntradas.length === 0) {
    console.log(corAleatoria("Você não digitou nenhuma propriedade."))
}
else {
    for (let i = 0; i < listaEntradas.length; i++) {
        console.log(corAleatoria(listaEntradas[i]))
    }
}