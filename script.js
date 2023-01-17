// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const table = document.createElement("table");
for(let i=0; i<10; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    tr.style.width = "200px";
    tr.style.height = "20px";
    for(let i=0; i<10; i++) {
        const td = document.createElement("td");
        tr.append(td);
        td.style.width = "20px";
        td.style.height = "20px";
        td.innerText = `${random()}`;
    }
}
document.body.append(table);

function random() {
    return Math.floor(Math.random()*(100-1) +1);
}
