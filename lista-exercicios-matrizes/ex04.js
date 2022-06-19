/*Faça um algoritmo que construa uma matriz de ordem 8x8 contendo números
inteiros, esses números devem ser gerados de forma aleatória. Em seguida
imprima a soma de todos os valores da matriz e informe se a soma é um valor par
ou ímpar.
*/
import { GenerateRandomNumber } from "./numeroaleatorio.js"

let matriz = []
let soma = 0
for(let i = 0;i<8;i++){
    matriz[i] = []
    for(let j=0;j<8;j++){
        matriz[i][j] = GenerateRandomNumber() 
        soma += matriz[i][j]
    }
}

console.table(matriz)
if(soma%2==0){
    console.log(`${soma} é um número PAR`)
}else{
    console.log(`${soma} é um número ÍMPAR`)
}

