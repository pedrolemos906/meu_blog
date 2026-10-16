//Header

const header = document.getElementById("cabecalho");

header.innerHTML = `<span>pedro@portifolio:~$</span>`;

//Header


//Menu Lateral

const intensMenu = [
    {texto: "inicio", hash: "#inicio"},
    {texto: "jornada", hash: "#jornada"},
    {texto: "projetos", hash: "#projetos"},
    {texto: "aprendizados", hash: "#aprendizados"},
    {texto: "desafios", hash: "#desafios"},
    {texto: "interesses", hash: "#interesses"},
    {texto: "atualizações", hash: "#atualizacoes"},
    {texto: "contato", hash: "#contato"}
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
