/*Faça um algoritmo que construa uma matriz de ordem 10x10 contendo números
inteiros, esses números devem ser gerados pelo resultado da multiplicação da i
por j onde i= linha e j= coluna*/

let matriz = []

for(let i = 0;i<10;i++){
    matriz[i] = []
    for(let j=0;j<10;j++){
        matriz[i][j] = i * j
    }
}
console.table(matriz)