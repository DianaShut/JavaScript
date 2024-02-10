const form = document.forms.creator;
const wrapper = document.getElementById('result');

const table = document.createElement('table');

// Додає обробник подій для події 'submit' форми.
form.onsubmit = function (e) {
    e.preventDefault(); //Запобігає стандартному відправленню форми, щоб уникнути перезавантаження сторінки.

    //Отримання значень з форми
    const rows = Number(this.row.value);
    const columns = Number(this.column.value);
    const content = this.content.value;

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        // <tr> (table row) представляє собою рядок в таблиці. В кожному рядку можуть бути додані один або кілька елементів <td> або <th>.

        for (let i = 0; i < columns; i++) {
            const td = document.createElement('td');
            //<td> (table data) представляє собою комірку в таблиці і містить фактичні дані. Комірки в рядку (в елементі <tr>) розташовуються горизонтально та представляють собою дані для кожного стовпця

            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}