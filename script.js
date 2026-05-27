const cookieBtn = document.getElementById("click")
const cookieCount = document.getElementById("cookie-count")

let score = 0

function incrementScore(event) {
    event.preventDefault();
    score++;
    cookieCount.textContent = score;
}

cookieBtn.addEventListener('click', incrementScore)
