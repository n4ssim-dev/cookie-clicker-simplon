const cookieBtn = document.getElementById("click")
const cookieScore = document.getElementById("cookie-score")
const multiplierBtn = document.getElementById("multiplier")
const multiplierScore = document.getElementById("multiplier-score")

let score = 0
let multiplier = 1

async function incrementScore(event) {
    event.preventDefault();
    score+= 1 * multiplier;
    cookieScore.textContent = score;
}

async function augmenterMultiplicateur(event) {
    event.preventDefault();

    if (score < 50) {
        return false;
    } else if (score >=50) {
        multiplier++
        multiplierScore.textContent = `x${multiplier}`
        score-=50
        cookieScore.textContent = score;
    }
}

multiplierBtn.addEventListener('click', augmenterMultiplicateur)
cookieBtn.addEventListener('click', incrementScore)
