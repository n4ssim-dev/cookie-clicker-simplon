const cookieBtn = document.getElementById("click")
const cookieScore = document.getElementById("cookie-score")
const multiplierBtn = document.getElementById("multiplier")

let score = 0
let multiplierCount = 1
let multiplier = 1 * multiplierCount

async function incrementScore(event) {
    event.preventDefault();
    score+= 1 * multiplier;
    cookieScore.textContent = score;
}

async function augmenterMultiplicateur(event) {
    event.preventDefault();
    coutMultiplier = 50 * multiplierCount
    if (score < coutMultiplier) {
        return false;
    } else if (score >= coutMultiplier) {
        multiplier++;
        multiplierCount++
        multiplierBtn.textContent = `Multiplicateur : x${multiplier} (Coût: ${50*multiplierCount})`
        score-= coutMultiplier
        cookieScore.textContent = score;
    }
}

multiplierBtn.addEventListener('click', augmenterMultiplicateur)
cookieBtn.addEventListener('click', incrementScore)
