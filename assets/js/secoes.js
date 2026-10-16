//Seções

const secoes = {
    inicio: async () => {
        const resposta = await fetch('assets/dados/inicio.json');

        const dados = await resposta.json();

        return `
            <img src="${dados.foto}" alt="Foto de ${dados.nome}." width="120">
            <h1>${dados.nome}</h1>
            <p class="frase">${dados.frase}</p>
            <p class="apresentacao">${dados.apresentacao}</p>
        `;
    },
    jornada: () => `<h1>Jornada Profissional</h1><p>Em construção</p>`,
    projetos: () => `<h1>Projetos</h1><p>Em construção</p>`,
    aprendizados: () => `<h1>Aprendizados</h1><p>Em construção</p>`,
    desafios: () => `<h1>Desafios</h1><p>Em construção</p>`,
    interesses: () => `<h1>Interesses</h1><p>Em construção</p>`,
    atualizacoes: () => `<h1>Atualizações</h1><p>Em construção</p>`,
    contato: () => `<h1>Contato</h1><p>Em construção</p>`
}