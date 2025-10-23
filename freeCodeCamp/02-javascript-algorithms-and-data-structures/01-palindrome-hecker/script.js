const inputEl = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const resultEl = document.getElementById("result")

// remove all non-alphanumeric characters and lowercase
function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/gi, "");
}

function isPalindrome(str) {
    const cleaned = normalize(str);
    const reversed = [...cleaned].reverse().join(""); // [...]: spread operator
    return cleaned === reversed; // true or false
}

function handleCheck() {
    const original = inputEl.value.trim();
    if (!original) { // equals to if (original === "") // falsy in javascript: "", 0, null, undefined, false
        alert("Please input a value.");
        return;
    }

    const ok = isPalindrome(original);
    resultEl.textContent = `${original} is ${ok ? "" : "not "}a palindrome.`
}

checkBtn.addEventListener("click", handleCheck);