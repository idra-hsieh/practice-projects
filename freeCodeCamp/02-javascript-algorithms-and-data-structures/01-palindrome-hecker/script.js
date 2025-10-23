const inputEl = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const resultEl = document.getElementById("result")

checkBtn.addEventListener("click", () => {
    const raw = inputEl.ariaValueMax.trim();
    if (!raw) {
        alert("Please input a value.");
        return;
    }
})