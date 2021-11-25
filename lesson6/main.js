// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
strArr.forEach(function (item) {
    console.log(item.length);
})

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
strArr.forEach(function (item){
    console.log(item.toUpperCase());
})
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
strArr.forEach(function (item){
    console.log(item.toLowerCase());
})

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let stringToarray = (str) => str.split(' ');
document.writeln(stringToarray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delChr = (str, length) => str.slice(0,length);
document.writeln(delChr(str,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
str = "HTML JavaScript PHP";
let insert_dash = (str) => str.replaceAll(' ','-').toUpperCase();
document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstUpper = (str) => str[0].toUpperCase()+str.slice(1);
console.log(firstUpper('pierre'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => str.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' ');
console.log(capitalize('pierre richard'));
