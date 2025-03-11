const numberElt = document.getElementById("number");
const resultBox = document.getElementById("result-box");
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false; /*used instead of square root */
    }
    return true;
}

function checkPrime() {
    let num = numberElt.value;
    if (num === "") {
        resultBox.textContent = "Enter an integer";
        resultBox.style.backgroundColor = "orange";
        return;
    }

    num = parseInt(num);
    if (isNaN(num)) {
        resultBox.textContent = "Enter a valid integer";
        resultBox.style.backgroundColor = "orange";
        return;
    }

    if (isPrime(num)) {
        resultBox.textContent = `${num} is a prime number`;
        resultBox.style.backgroundColor = "green";
        resultBox.style.color = "white";
    } else {
        resultBox.textContent = `${num} is not a prime number`;
        resultBox.style.backgroundColor = "orange";
        resultBox.style.color = "white";
    }
}
