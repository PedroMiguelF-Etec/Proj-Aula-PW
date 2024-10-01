var nome = window.prompt("Digite o seu nome: ")
var idade = Number(window.prompt("Digite sua idade: "))

document.write(`Seu nome é <b>${nome}</b> e tem <b>${idade}</b>.<br>`);
document.write(`Seu nome tem <b>${nome.length}</b> de caracteres.<br>`);
document.write(`Seu nome em letras maiusculas é <b>${nome.toUpperCase()}</b>.<br>`);
document.write(`Sua idade em é de <b>${idade*365}Dias</b> e <b>${idade*365*24}Horas</b>`);