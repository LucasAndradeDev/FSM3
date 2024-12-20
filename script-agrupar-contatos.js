// Script
import  contatos  from "./array_objects.js";

const agruparContatos = () => {
// Agrupando os contatos por tipos de assunto
const contatosPorAssunto = contatos.reduce((acumulador, contato) => {
    // Verifica se o assunto já existe no acumulador
    if (!acumulador[contato.assunto]) {
        acumulador[contato.assunto] = [];
    }
    // Adiciona o contato ao grupo correspondente
    acumulador[contato.assunto].push(contato);
    return acumulador;
}, {});

// Exibindo os contatos classificados por tipos de assunto
console.log("Contatos classificados por assunto:");
for (const [assunto, lista] of Object.entries(contatosPorAssunto)) {
    console.log(`\nAssunto: ${assunto}`);
    lista.forEach((contato, index) => {
        console.log(` ${index + 1}. Nome: ${contato.nome}, Email: ${contato.email}`);
    });
}

}

agruparContatos();

export default agruparContatos


