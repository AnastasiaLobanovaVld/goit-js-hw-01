function getElementWidth(content, padding, border) {
    content = parseFloat(content);
    padding = parseFloat(padding);
    border = parseFloat(border);
    const result = content + (padding * 2) + (border * 2);
    return result;
}

const r1 = getElementWidth("50px", "8px", "4px");
const r2 = getElementWidth("60px", "12px", "8.5px");
const r3 = getElementWidth("200px", "0px", "0px");
console.log(r1);
console.log(r2);
console.log(r3);