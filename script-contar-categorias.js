// Script
import  contatos  from "./array_objects.js";

const contarCategorias = () => {
// Contagem de mensagens por assuntoo
const contagemPorAssunto = contatos.reduce((acumulador, contato) => {
    // Incrementa o contador para o assunto atual
    acumulador[contato.assunto] = (acumulador[contato.assunto] || 0) + 1;
    return acumulador;
}, {});

// Exibindo a contagem de mensagens por assunto
console.log("Contagem de mensagens por categoria:");
for (const [assunto, contagem] of Object.entries(contagemPorAssunto)) {
    console.log(`Assunto: ${assunto}, Mensagens: ${contagem}`);
}

};


contarCategorias();

export default contarCategorias
