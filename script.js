const licoes = [
    {numero: 1, titulo: "Jesus vence, Satanás perde", data1: new Date(2023, 2, 25), data2: new Date(2023, 2, 31), img: "1.jpeg"},
    {numero: 2, titulo: "Tempo de decisão", data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 7), img: "2.jpeg"},
    {numero: 3, titulo: "O evangelho eterno", data1: new Date(2023, 3, 8), data2: new Date(2023, 3, 14), img:"3.jpeg"},
    {numero: 4, titulo: "Temam a Deus e deem glória a Ele", data1: new Date(2023, 3, 15), data2: new Date(2023, 3, 21), img:"4.jpeg"},
    {numero: 5, titulo: "A boa notícia do juízo", data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 28), img:"5.jpeg"},
    {numero: 6, titulo: "A hora do seu juízo", data1: new Date(2023, 3, 29), data2: new Date(2023, 4, 5), img:"6.jpeg"},
    {numero: 7, titulo: "Adorando o Criador", data1: new Date(2023, 4, 6), data2: new Date(2023, 4, 12), img:"7.jpeg"},
    {numero: 8, titulo: "O sábado e o fim", data1: new Date(2023, 4, 13), data2: new Date(2023, 4, 19), img:"8.jpeg"},
    {numero: 9, titulo: "Uma cidade chamada confusão", data1: new Date(2023, 4, 20), data2: new Date(2023, 4, 26), img:"9.jpeg"},
    {numero: 10, titulo: "Os últimos enganos de Satanás", data1: new Date(2023, 4, 27), data2: new Date(2023, 5, 2), img:"10.jpeg"},
    {numero: 11, titulo: "O selo de Deus e a marca da besta: parte 1", data1: new Date(2023, 5, 3), data2: new Date(2023, 5, 9), img:"11.jpeg"},
    {numero: 12, titulo: "O selo de Deus e a marca da besta: parte 2", data1: new Date(2023, 5, 10), data2: new Date(2023, 5, 16), img:"12.jpeg"},
    {numero: 13, titulo: "Iluminados com a glória de Deus", data1: new Date(2023, 6, 17), data2: new Date(2023, 5, 23), img:"13.jpeg"},
]

let linha = document.querySelectorAll('.linha')

linha.forEach((e)=>{
    e.addEventListener('click', function mostrarPerguntas(){
       e.lastElementChild.classList.toggle('toggle')
    })
})