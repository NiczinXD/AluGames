let games = {
    1: document.getElementById('game-1'),
    2: document.getElementById('game-2'),
    3: document.getElementById('game-3')
};

document.querySelector('.dashboard__item__button').addEventListener('click', function(event) {
    alterarStatus(event, botao);
});

function alterarStatus(event, id){
    event.preventDefault()

    let item = games[id]
    let botao = item.querySelector('.dashboard__item__button');
    let img = item.querySelector('.dashboard__item__img');

    if (botao.textContent === 'Alugar') {
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        } else {
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
    }
}
