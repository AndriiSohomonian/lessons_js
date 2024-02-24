//Завдання №3
//Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
//введення значень 
let quantityItems = parseInt(prompt('Введіть кількість одиниць товару', '3'));
const priceItem = parseFloat(prompt('Введіть ціну одиниці товару', '30'));
const taxItems = 5;

//Виведення результату
document.write (`
<table class="table__wrapper">
    <tr class="table__items">
        <th>Кількість товарів</th>
        <td>${quantityItems}</td>
    </tr>
    <tr class="table__items">
        <th>Ціна одниці товару</th>
        <td>${priceItem}</td>
    </tr>
    <tr class="table__items">
        <th>Загальна вартість товару</th>
        <td>${quantityItems * priceItem}</td>
    </tr>
    <tr class="table__items">
        <th>ПДВ від загальної вартості</th>
        <td>${quantityItems * priceItem*taxItems/100}</td>
    </tr>
</table>
`)