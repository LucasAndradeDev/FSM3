import contatos from "./array_objects.js";


const assunto = "Dúvida";  

const filtrarAssuntos = () => {
  // Verifica se o assunto foi fornecido
  if (assunto) {
    // Filtro (ignora maiúsculas e minúsculas)
    const contatosFiltrados = contatos.filter((contato) =>
      contato.assunto.toLowerCase() === assunto.toLowerCase()
    );

    // Resultado
    if (contatosFiltrados.length > 0) {
      console.log("Resultados encontrados:", contatosFiltrados);
    } else {
      console.log("Nenhum contato encontrado com esse assunto.");
    }
  } else {
    console.log("Por favor, insira um assunto válido.");
  }
};

filtrarAssuntos();

export default filtrarAssuntos;
