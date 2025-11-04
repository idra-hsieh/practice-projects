# Roman Numeral Converter

A **Roman Numeral Converter** that transforms Arabic numerals (1–3999) into their Roman numeral equivalents.

---

## Objective

Build an app that functions similarly to [this FreeCodeCamp example](https://roman-numeral-converter.freecodecamp.rocks).

The app should:
- Take a user’s number input.
- Convert it into Roman numerals.
- Display the result dynamically on the page.

---

## Requirements

### User Stories

1. You should have an input element with an **id** of `number`.  
2. You should have a button element with an **id** of `convert-btn`.  
3. You should have a `div`, `span`, or `p` element with an **id** of `output`.  
4. When you click the `#convert-btn` element without entering a value into the `#number` element, the `#output` element should contain the text:  
   **"Please enter a valid number"**  
5. When the number is less than 1, the `#output` element should contain:  
   **"Please enter a number greater than or equal to 1"**  
6. When the number is 4000 or greater, the `#output` element should contain:  
   **"Please enter a number less than or equal to 3999"**  
7. Valid conversions should return the correct Roman numerals (e.g., 9 → IX, 16 → XVI, 649 → DCXLIX, 1023 → MXXIII, 3999 → MMMCMXCIX).  

