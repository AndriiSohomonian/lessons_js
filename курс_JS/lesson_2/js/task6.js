//Завдання №6
//З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
//Введення
const quantityItemsFirst = parseFloat(
  prompt("Введіть кількість першого товару", "8")
);
const priceItemsFirst = parseFloat(
  prompt("Введіть вартість першого товару", "40")
);

const quantityItemsSecond = parseFloat(
  prompt("Введіть кількість другого товару", "15")
);
const priceItemsSecond = parseFloat(
  prompt("Введіть вартість другого товару", "33")
);

const quantityItemsThird = parseFloat(
  prompt("Введіть кількість третього товару", "4")
);
const priceItemsThird = parseFloat(
  prompt("Введіть вартість третього товару", "160")
);

//Обчислення
const totalPriceFirst = quantityItemsFirst * priceItemsFirst;
const totalPriceSecond = quantityItemsSecond * priceItemsSecond;
const totalPriceThird = quantityItemsThird * priceItemsThird;
const totalPrice = totalPriceFirst + totalPriceSecond + totalPriceThird;

//Виведення
document.write(`
<table class="table__wrapper">
    <tr class="table__items">
        <th>Кількість товарів</th>
        <td>3</td>
    </tr>
    <tr class="table__items">
        <th>Перший товар</th>
        <td>Вар.од:${priceItemsFirst}, К-сть:${quantityItemsFirst}, ціна:${totalPriceFirst}</td>
    </tr>
    <tr class="table__items">
        <th>Другий товар</th>
        <td>Вар.од:${priceItemsSecond}, К-сть:${quantityItemsSecond}, ціна:${totalPriceSecond}</td>
    </tr>
    <tr class="table__items">
        <th>Третій товар</th>
        <td>Вар.од:${priceItemsThird}, К-сть:${quantityItemsThird}, ціна:${totalPriceThird}</td>
    </tr>
    <tr class="table__items">
        <th>Загальна ціна:</th>
        <td>${totalPrice}</td>
    </tr>
</table>
`);
