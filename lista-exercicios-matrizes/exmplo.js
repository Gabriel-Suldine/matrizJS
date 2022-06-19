import readline from 'readline-sync'
let matriz = []

for(let l = 0;l<2;l++){
    matriz[l] = []
    for(let c=0;c<3;c++){
        matriz[l][c] = readline.questionInt(`Matriz[${l}][${c}] = `)
    }
}
console.table(matriz)