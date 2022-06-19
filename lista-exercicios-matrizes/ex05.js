/* Faça um algoritmo que construa uma matriz de ordem 6x6 contendo números
inteiros gerados de forma aleatória. Em seguida imprima a soma dos valores da
diagonal principal.*/
import { GenerateRandomNumber } from "./numeroaleatorio.js"
let matriz = []
let numeroDiagonal = 0
for(let i = 0;i<6;i++){
    matriz[i] = []
    for(let j=0;j<6;j++){
        matriz[i][j] = GenerateRandomNumber() 
        if(i == j )
        numeroDiagonal += matriz[i][j]
    }
}
console.table(matriz)
console.log(numeroDiagonal)