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
    const pairs = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ]
    let res = '';
    let remaining = n;
    for (const [r, v] of pairs) {
        while (remaining >= v) {
            res += r;
            remaining -= v;
        }
        if (remaining === 0) break;
    }
    return res;
}

// sanity chaecks
console.assert(convertToRoman(9) === 'IX', '9 → IX');
console.assert(convertToRoman(16) === 'XVI', '16 → XVI');
console.assert(convertToRoman(649) === 'DCXLIX', '649 → DCXLIX');
console.assert(convertToRoman(1023) === 'MXXIII', '1023 → MXXIII');
console.assert(convertToRoman(3999) === 'MMMCMXCIX', '3999 → MMMCMXCIX');