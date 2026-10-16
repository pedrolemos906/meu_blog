const areaConteudo = document.getElementById('conteudo');

async function mostrarSecao(){
    const nome = location.hash.slice(1) || "inicio";

    document.querySelectorAll("#menu-lateral a").forEach(link => {

        link.classList.toggle("ativo", link.getAttribute("href") === "#" + nome);
    });
    
    if (secoes[nome]) {
        areaConteudo.innerHTML = await secoes[nome]();
    } else {
        areaConteudo.innerHTML = `<h1>404</h1><p>Seção não encontrada</p>`;
    }
}

window.addEventListener('hashchange', mostrarSecao);

mostrarSecao();