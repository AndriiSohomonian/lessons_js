//Завдання №2
//Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
//введення значень
const userBirthday  = parseInt(prompt('Введіть рік, в якому ви народились', '1999'));
let currentYear = 2024;
//Виведення результату
document.write(`
На сьогодні вам приблизно ${currentYear - userBirthday} років.
`)