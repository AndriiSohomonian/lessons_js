//Завдання №1
//Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
//Введення значень a, b
const numA = parseFloat(prompt('Введіть значення "а" для обчислення виразів', '3'));
const numB = parseFloat(prompt('Введіть значення "b" для обчислення виразів', '6'));

//обчислення
// 1. Додавання
const res1 = numA + numB;
// 2. Множення
const res2 = numA * numB;
// 3. Ділення
const res3 = numA / numB;

//Виведення результату у таблицю
document.write(`
<table class="table__wrapper">
    <tr class="table__items">
        <th>Дія</th>
        <th>Вираз</th>
        <th>Результат</th>
    </tr>
    <tr class="table__items">
        <td>Додавання</td>
        <td>${numA} + ${numB}</td>
        <td>Результат = ${res1}</td>
    </tr>
    <tr class="table__items">
        <td>Множення</td>
        <td>${numA} * ${numB}</td>
        <td>Результат = ${res2}</td>
    </tr>
    <tr class="table__items">
        <td>Ділення</td>
        <td>${numA} / ${numB}</td>
        <td>Результат = ${res3}</td>
    </tr>
</table>
`)