const dataAtual = new Date();
let dataObjetivo = prompt("Qual a data que você está esperando? Formato que a data deve ser escrita --> Ano-Mês-Dia Ex:2024-04-10");
dataObjetivo = new Date(dataObjetivo + "T23:59:59");
let diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam;