//Завдання №5
//Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
//Введення
const seconds = parseFloat(prompt('Введіть кількість секунд', '600'));

//виведення
document.write(`
<table class="table__wrapper">
    <tr class="table__items">
        <th>Кількість секунд</th>
        <th>кількість хвилин в даній кількості секунд</th>
        <th>кількість годин в даній кількості секунд</th>
    </tr>
    <tr class="table__items">
        <td>${seconds}</td>
        <td>${seconds / 60}хв.</td>
        <td>${seconds/3600}год.</td>
    </tr>
</table>
`)