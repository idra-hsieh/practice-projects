'use strict';

const inputEl = document.getElementById('number');
constbtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

function setOutput(text) {
    outputEl.textContent = text;
}

btnEl.addEventListener('click', onConvert);

function onConver() {
    const raw = (inputEl.value ?? '').trim();

    // reject empty input
    if (raw === '') {
        setOutput('Please enter a valid number');
        return;
    }

    // reject non-numeric and decimal input
    if (!/^-?\d+$/.test(raw)) {
        setOutput('Please enter a valid number');
        return;
    }

    const n = Number(raw);

    validateandConvert(n);
}

function validateandConvert(n) {
    if (n < 1) {
        setOutput('Please enter a number greater than or equal to 1');
        return;
    }

    if (n >= 4000) {
        setOutput('Please enter a number less than or equal to 3999');
        return;
    }

    // proceed to conversion
    const roman = convertToRoman(n);
    setOutput(roman);
}

function convertToRoman(n) {
    return '';
}