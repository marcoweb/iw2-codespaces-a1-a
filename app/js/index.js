let mensagem = "Teste de Javascript";

document.querySelector("#titulo").innerHTML = mensagem;

const vetor = ["Maçã", "Banana", "Melão", "Morango"];

for(let cont = 0;cont < 3;cont++) {
    console.log(vetor[cont]);
}

console.log("Foreach");

const retornoForEach = vetor.forEach((fruta) => {
    console.log(fruta);
    return fruta.toUpperCase();
});

console.log("Map");

const retornoMap = vetor.map((fruta) => {
    console.log(fruta);
    return fruta.toUpperCase()
});

console.log(retornoForEach);
console.log(retornoMap);

//console.log(vetor[2]);