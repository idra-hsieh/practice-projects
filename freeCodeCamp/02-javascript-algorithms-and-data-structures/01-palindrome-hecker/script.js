// Wait until the entire DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const inputEl = document.getElementById("text-input");
    const checkBtn = document.getElementById("check-btn");
    const resultEl = document.getElementById("result");

    // If elements are not found (for example, in FCC test iframe), stop execution
    if (!inputEl || !checkBtn || !resultEl) return;

    // Normalize: convert to lowercase and remove all non-alphanumeric characters
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Check if a string is a palindrome
    const isPalindrome = (str) => {
        const cleaned = normalize(str);
        const reversed = [...cleaned].reverse().join("");
        return cleaned === reversed;
    };

    // Handle click on the "Check" button
    const handleCheck = () => {
        const original = inputEl.value.trim();

        // If input is empty, show alert (must match FCC test exactly — no period)
        if (!original) {
            alert("Please input a value");
            return;
        }

        const ok = isPalindrome(original);
        resultEl.textContent = `${original} is ${ok ? "" : "not "}a palindrome.`;
    };

    // Add event listener for button click
    checkBtn.addEventListener("click", handleCheck);

    // Clear result when user edits the input
    inputEl.addEventListener("input", () => {
        resultEl.textContent = "";
    });
});
