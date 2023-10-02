const container = document.getElementById('tableContainer');

let tableHtml = '<table>';

let number = 1;
for (let i = 0; i < 10; i++) {
    tableHtml += '<tr>';
    for (let j = 0; j < 10; j++) {
        tableHtml += `<td>${number}</td>`;
        number++;
    }
    tableHtml += '</tr>';
}

tableHtml += '</table>';

container.innerHTML = tableHtml;
