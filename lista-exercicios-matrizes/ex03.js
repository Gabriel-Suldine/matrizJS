/*
Faça um algoritmo que construa uma matriz de ordem 15x10 contendo números
inteiros, esses números devem ser gerados a partir das seguintes fórmulas:
MAT[ i ] [ j ] = 3i + 5j – 2 se i < j
MAT[ i ] [ j ] = 3i - 5j +3 se i > j
MAT[ i ] [ j ] = 3i + 5j - 3 se i == j

*/

let matriz = []

for(let i = 0;i<15;i++){
    matriz[i] = []
    for(let j=0;j<10;j++){
        if( i < j){
        matriz[i][j] = 3*i + 5*j - 2
     }if (i > j) {
        matriz[i][j] = 3*i - 5*j + 3
     } if(i==j) {
        matriz[i][j] = 3*i + 5*j - 3
    }        
    }
}
console.table(matriz)