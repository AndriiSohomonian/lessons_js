//Завдання №4
//Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
//Введення
const longSm = parseFloat(prompt("Введіть довжину у сантиметрах", "10"));

//Виведення
document.write(`
<table class="table__wrapper">
    <tr class="table__items">
        <th>Довжина в сантиметрах</th>
        <th>Довжина в метрах</th>
        <th>Довжина в кілометрах</th>
    </tr>
    <tr class="table__items">
        <td>${longSm}см.</td>
        <td>${longSm / 100}м.</td>
        <td>${longSm / 100000}км.</td>
    </tr>
</table>
`);
