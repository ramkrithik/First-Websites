const game = () => {
    let pscore = 0;
    let csore = 0;
    const startgame = () => {
        const playbtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playbtn.addEventListener('click', () => {
            introscreen.classList.add("fadeout");
            match.classList.add('fadein');
        });
    };
    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerhand = document.querySelector('.player-hand');
        const comphand = document.querySelector('.computer-hand');
        const compopt = ['rock', 'paper', 'scissors'];
        const compnum = Math.floor(Math.random() * 3);
        console.log(compnum);

    };
    startgame();
    playmatch();
};
game();