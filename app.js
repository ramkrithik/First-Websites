const game = () => {
    let pscore = 0;
    let cscore = 0;
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
        const compopt = ['rock', 'paper', 'scissor'];
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        });
        options.forEach((option) => {
            option.addEventListener('click', function() {
                const compnum = Math.floor(Math.random() * 3);
                const compchoice = compopt[compnum];

                setTimeout(() => {
                    comphands(this.textContent, compchoice);
                    playerhand.src = `./assets/${this.textContent}.png`;
                    comphand.src = `./assets/${compchoice}.png`;
                }, 1000)
                playerhand.style.animation = 'shakeplayer 1s ease';
                comphand.style.animation = 'shakecomp 1s ease';
            });
        });

    };
    const comphands = (pchoice, cchoice) => {
        const winner = document.querySelector('.winner')
        if (pchoice === cchoice) {
            winner.textContent = 'It is a tie';
            updatescore();
            return;
        } else if (pchoice === 'rock' && cchoice === 'scissor') {
            winner.textContent = 'player is winner';
            pscore++;
            updatescore();
            return;
        } else if (pchoice === 'paper' && cchoice === 'rock') {
            winner.textContent = 'player is winner';
            pscore++;
            updatescore();
            return;
        } else if (pchoice === 'scissor' && cchoice === 'paper') {
            winner.textContent = 'player is winner';
            pscore++;
            updatescore();
            return;
        } else {
            winner.textContent = 'computer is winner';
            cscore++;
            updatescore();
            return;
        }


    };
    const updatescore = () => {
        const playerscore = document.querySelector('.player-score p');
        const compscore = document.querySelector('.computer-score p');
        playerscore.textContent = pscore;
        compscore.textContent = cscore;
    };
    startgame();
    playmatch();
};
game();