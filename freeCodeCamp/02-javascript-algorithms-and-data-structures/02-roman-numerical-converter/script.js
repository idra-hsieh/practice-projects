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
    if (raw === '') {
        SetOutput('Please enter a valid number');
        return;
    }
}