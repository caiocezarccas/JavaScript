let num = [5, 8, 2, 9, 3]//num.length
//num[5]=6
num.push(1) // coloca na última posição independente da quantidade
//num.sort() // a ordem influencia na posição de num.push
console.log(num)
console.log(`Vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
