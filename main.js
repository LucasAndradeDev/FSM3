// Script principal para executar os outros scripts
import contarCategorias from "./script-contar-categorias.js";
import agruparContatos from "./script-agrupar-contatos.js";
import filtrarAssuntos from "./script-filtrar-assuntos.js";

// Executando os scripts

async function main() {
    try {
        await filtrarAssuntos();
        await contarCategorias();
        await agruparContatos();
        console.log("\nFim da execução dos scripts.");
    } catch (error) {
        console.error("Erro ao executar os scripts:", error);
    }
}

main();
