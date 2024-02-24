//Завдання №7
//Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
//Введення
const randomMonth = Math.floor(Math.random() * 11) + 1;
const randomDay = Math.floor(Math.random() * 7);

//Виведення 
document.write(`
Cума випадкового дня та місяця = ${randomDay+randomMonth}
`)