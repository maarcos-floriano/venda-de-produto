function alterarFundo(foto){
    const produto = document.querySelector('.container');

    produto.style.backgroundImage = `url(../assets/${foto}.png)`;
}