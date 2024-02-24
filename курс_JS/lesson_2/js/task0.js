//введення значень a, b, c
const numA = parseFloat(prompt('Введіть значення "а" для обчислення виразів', '3'));
const numB = parseFloat(prompt('Введіть значення "b" для обчислення виразів', '6'));
const numC = parseFloat(prompt('Введіть значення "c" для обчислення виразів', '9'));

//обчислення
// 1. S1 = a + 12 + b
const res1 = numA + 12 + numC;
// 2. S2 = √(a + b / 2a)
const res2 = Math.sqrt((numA + numB / (2*numA)));
// 3. S3 = √'3(a + b)c
const res3 = Math.cbrt((numA + numB)*numC);
// 4. S4 = sin(a / -b)
const res4 = Math.sin(numA/-numB);

//Виведення результату
document.write(`
<h2 class="wrapper__title">Результат обчислень:</h2>
<ul class="wrapepr__list">
    <li class="list__item">a + 12 + b = ${res1}</li>
    <li class="list__item">√(a + b / 2a) = ${res2}</li>
    <li class="list__item">√'3(a + b)c = ${res3}</li>
    <li class="list__item">sin(a / -b) = ${res4}</li>
</ul>
`);