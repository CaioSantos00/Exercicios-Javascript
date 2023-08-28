let divText = document.getElementById('divText');
let divText2 = document.getElementById('divText2');

let curiosidades = [{ título: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
{ título: "Fórmila para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos." },
{ título: "Suicida que não morre", conteudo: "Chuck Norris foi homem-bonba 34 vezes." },
{ título: "Olhos que tudo vêen", conteudo: "Chuck Norris já viu o homem invisível." },
{ título: "Menipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são." },
{ título: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
{ título: "Não vale chorar", conteudo: "Chuck Norris faz cebolas choraren." },
{ título: "Tenpero de fogo", conteudo: "Chuck Norris usa pólvora como tempero." },
{ título: "Extínção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
{ título: "Contando sem parar", conteudo: "Chuck Norris contou até o ínfinito. Duas vezes." }]

function escreva() {
    let gere = Math.floor(Math.random() * 10);
    divText.innerText = curiosidades[gere].título
    divText2.innerText = curiosidades[gere].conteudo
}
