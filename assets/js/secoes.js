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
    jornadaProfissional: async () => {
        const resposta = await fetch('assets/dados/profissional.json');
        const dados = await resposta.json();

        const itens = dados.experiencias.map(exp => `
            <div class="item-tempo">
                <p class="periodo">${exp.periodo}</p>
                <h2>${exp.cargo}</h2>
                <p class="empresa">${exp.empresa}</p>
                <p>${exp.descricao}</p>
            </div>
        `).join("");

        return `
            <h1>Jornada Profissional</h1>
            <p class="texto">${dados.texto}</p>
            <div class="linha-tempo">
                ${itens}
            </div>`;
    },
    projetos: async () => {
        const resposta = await fetch('assets/dados/projetos.json');
        const lista = await resposta.json();

        const cards = lista.map(projeto => `
            <div class="card">
                <h2> ${projeto.titulo}</h2>
                <p class="tipo">${projeto.tipo}</p>
                <p> ${projeto.descricao}</p>
                <p class="tecnologias">${projeto.tecnologias.join(", ")}</p>
                <a href="${projeto.link}" target="_blank" rel="noopener">ver projeto</a>
            </div>
        `).join("");
        return `
            <h1>Projetos</h1>
            <div class="lista-cards">
                ${cards}
            </div>`;
    },
    jornadaAcademica: async () => {
        const resposta = await fetch('assets/dados/academica.json');
        const dados = await resposta.json();

        const itens = dados.formacoes.map(formacao => `
            <div class="item-tempo">
                <p class="periodo">${formacao.periodo}</p>
                <h2>${formacao.titulo}</h2>
                <p class="empresa">${formacao.instituicao}</p>
                <p>${formacao.descricao}</p>
            </div>
        `).join("");

        return `
            <h1>Jornada Acadêmica</h1>
            <p class="texto">${dados.texto}</p>
            <div class="linha-tempo">
                ${itens}
            </div>`;
    },
    atualizacoes: async () => {
        const resposta = await fetch('assets/dados/atualizacoes.json');
        const dados = await resposta.json();

        const itens = dados.registros.map(registro => `
            <div class="item-tempo">
                <p class="periodo">${registro.data}</p>
                <p>${registro.texto}</p>
            </div>
        `).join("");

        return `
            <h1>Atualizações</h1>
            <p class="texto">${dados.texto}</p>
            <div class="linha-tempo">
                ${itens}
            </div>`;
    },
    contato: async () => {
        const resposta = await fetch('assets/dados/contato.json');
        const dados = await resposta.json();

        const links = dados.links.map(item => `
            <li>
                <span class="rotulo">${item.nome}:</span>
                <a href="${item.url}" target="_blank" rel="noopener">${item.texto}</a>
            </li>
        `).join("");

        return `
            <h1>Contato</h1>
            <p class="texto">${dados.texto}</p>
            <ul class="lista-contato">${links}</ul>
        `;
    }
}