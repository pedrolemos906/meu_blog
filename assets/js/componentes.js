//Header

const header = document.getElementById("cabecalho");

header.innerHTML = `<span>pedro@portfolio:~$</span>`;

//Header


//Menu Lateral

const intensMenu = [
    {texto: "Início", hash: "#inicio"},
    {texto: "Jornada Profissional", hash: "#jornadaProfissional"},
    {texto: "Projetos", hash: "#projetos"},
    {texto: "Jornada Acadêmica", hash: "#jornadaAcademica"},
    {texto: "Atualizações", hash: "#atualizacoes"},
    {texto: "Contato", hash: "#contato"}
];

const menuLateral = document.getElementById("menu-lateral");

menuLateral.innerHTML = intensMenu
    .map(item => `<a href="${item.hash}">${item.texto}</a>`)
    .join("");

//Menu Lateral


//Rodapé

const rodape = document.getElementById("rodape");

rodape.innerHTML = `<span>© ${new Date().getFullYear()} Pedro Lemos</span>`;

//Rodapé
