/*. Faça um algoritmo que construa uma matriz de ordem 50x50 contendo números
inteiros gerados a partir da fórmula: MAT[ i ] [ j ] = 5i + 2 j – 2 * 4.*/

import readline from 'readline-sync'
let matriz = []

for(let i = 0;i<50;i++){
    matriz[i] = []
    for(let j=0;j<50;j++){
        matriz[i][j] = 5*i + 2*j - 2 * 4
    }
}
console.table(matriz)