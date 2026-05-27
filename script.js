const cookieBtn = document.getElementById("click")
const cookieScore = document.getElementById("cookie-score")
const multiplierBtn = document.getElementById("multiplier")
const autoclickerBtn = document.getElementById("autoclic")

let score = 501
cookieScore.textContent = score
let multiplierCount = 1
let multiplier = 1 * multiplierCount

let bonus = {
    "autoclic": {
        "achete": false,
        "cout": 500,
        "desc": "L'autoclicker permet d'automatiquement cliquer sur le cookie toutes les secondes."
    }
}

let autoclicDict = bonus["autoclic"]
let autoclicCout = autoclicDict["cout"]
let autoclicAchete = autoclicDict["achete"]

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
            score+= 1 * multiplier;
            cookieScore.textContent = score;
        }, 1000)
    }
}

multiplierBtn.addEventListener('click', augmenterMultiplicateur)
cookieBtn.addEventListener('click', incrementScore)
autoclickerBtn.addEventListener('click', acheterAutoclicker)