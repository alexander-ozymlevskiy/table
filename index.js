// Створюємо таблицю.
const table = document.createElement("table");


// Створюємо рядок таблиці та додаєм до таблиці
let row = document.createElement("tr");
table.appendChild(row);

// Створюємо ячейки таблиці від 1 до 100.
for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("td");
  cell.textContent = i;

  // додаємо ячейку до рядка
  row.appendChild(cell);

  // на кожній 10 ітерації створюється новий рядок.
  if (i % 10 === 0 && i < 100) {
    row = document.createElement("tr");
    table.appendChild(row);
  }
}

// Рамка для таблиці.
table.setAttribute("border", "1");

// Додаємо таблицю до body.
document.body.appendChild(table);

