const prompt = require("prompt-sync")();

let termo = prompt("Digite o termo: ");
var penultimo=0, ultimo=1;
var numero;
var resposta = [];
  
if(termo<=2){
    numero = termo-1;
    console.log("O termo existe não sequencia de fibonacci")
}else{
    resposta.push(penultimo,ultimo);
    for(let i = 0; i <= termo; i++){
        numero= ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
        resposta.push(numero);
    }
}
console.log("Sequencia Fibonacci: ")
resposta.forEach(element => {
    console.log(element)
});
if(resposta.find(element => element == termo)) console.log("O termo existe na sequencia de fibonacci")

