function getElementWidth(content, padding, border) {
    contentParsed = parseFloat(content);
    paddingParsed = parseFloat(padding);
    borderParsed = parseFloat(border);
    const result = contentParsed + (paddingParsed * 2) + (borderParsed * 2);
    return result;
}

const r1 = getElementWidth("50px", "8px", "4px");
const r2 = getElementWidth("60px", "12px", "8.5px");
const r3 = getElementWidth("200px", "0px", "0px");
console.log(r1);
console.log(r2);
console.log(r3);