const cookieBtn = document.getElementById("click")
const cookieScore = document.getElementById("cookie-score")
const multiplierBtn = document.getElementById("multiplier")
const autoclickerBtn = document.getElementById("autoclic")
const bonusBtn = document.getElementById("bonus")

let score = 6300
cookieScore.textContent = score
let multiplierCount = 0
let multiplier = 1
let bonusMultiplier = 1

let bonus = {
    "autoclic": {
        "achete": false,
        "cout": 500,
        "desc": "L'autoclicker permet d'automatiquement cliquer sur le cookie toutes les secondes.",
        "textContent": "Autoclicker (Coût : 500)"
    },
    "scoreboost": {
        "achete": false,
        "cout": 5000,
        "desc": "Un boost de 200% du gain de cookies pendant 30secondes.",
        "textContent": "200% Bonus (Coût : 5000)"
    }
}

let autoclicDict = bonus["autoclic"]
let autoclicCout = autoclicDict["cout"]
let autoclicAchete = autoclicDict["achete"]

let scoreboostDict = bonus["scoreboost"]
let scoreboostCout = scoreboostDict["cout"]
let scoreboostAchete = scoreboostDict["achete"]
let scoreboostTextContent = scoreboostDict["textContent"]

async function incrementScore(event) {
    event.preventDefault();
    score += 1 * multiplier * bonusMultiplier;
    cookieScore.textContent = score;
}

async function augmenterMultiplicateur(event) {
    event.preventDefault();
    const coutMultiplier = 50 * Math.pow(2, multiplierCount)
    if (score < coutMultiplier) {
        return false;
    }
    score -= coutMultiplier;
    multiplierCount++;
    multiplier *= 2;
    multiplierBtn.textContent = `Multiplicateur : x${multiplier} (Coût: ${50 * Math.pow(2, multiplierCount)})`
    cookieScore.textContent = score;
}

async function acheterAutoclicker(event) {
    event.preventDefault();

    if (autoclicCout > score) {
        return false;
    } else if (autoclicCout <= score && autoclicAchete == false) {
        autoclicAchete = true;
        score -= autoclicCout
        autoclickerBtn.textContent = `Autoclicker (Acheté)`
        cookieScore.textContent = score;
        loop_autoclic = setInterval(function(){
            score += 1 * multiplier * bonusMultiplier;
            cookieScore.textContent = score;
        }, 1000)
    }
}

async function acheterBonus(event) {
    event.preventDefault();

    if (scoreboostAchete == false && score >= scoreboostCout) {
        scoreboostAchete = true;
        score -= scoreboostCout;
        cookieScore.textContent = score;

        bonusMultiplier = 2;

        let timeLeft = 30;
        bonusBtn.textContent = `200% Bonus (${timeLeft}sec)`;

        const countdown = setInterval(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                bonusMultiplier = 1;
                scoreboostAchete = false;
                bonusBtn.textContent = scoreboostTextContent;
            } else {
                bonusBtn.textContent = `200% Bonus (${timeLeft}sec)`;
            }
        }, 1000);
    } else {
        return false;
    }
}

multiplierBtn.addEventListener('click', augmenterMultiplicateur)
cookieBtn.addEventListener('click', incrementScore)
autoclickerBtn.addEventListener('click', acheterAutoclicker)
bonusBtn.addEventListener('click', acheterBonus)