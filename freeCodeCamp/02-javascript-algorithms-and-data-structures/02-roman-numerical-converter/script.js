'use strict';

const inputEl = document.getElementById('number');
constbtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

function SetOutput(text) {
    outputEl.textContent = text;
}

btnEl.addEventListener('click', onConvert);

function onConver() {
    const raw = (inputEl.value ?? '').trim();

    // reject empty input
    if (raw === '') {
        SetOutput('Please enter a valid number');
        return;
    }

    // reject non-numeric and decimal input
    if (!/^-?\d+$/.test(raw)) {
        SetOutput('Please enter a valid number');
        return;
    }

    const n = Number(raw);

    validateandConvert(n);
}

function validateandConvert(n) {

}