//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rect = (a, b) => a * b;
console.log(rect(5,10));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
let area2 = (r) => 3.14 * r * r;
console.log(area2(5));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let scyll = (h,r) => 2 * 3.14 * r * h;
console.log(scyll(5, 2));

//створити функцію яка приймає масив та виводить кожен його елемент
let arrLog = (ar) => {
    for (const arrElement of ar) {
        console.log(arrElement);
    }
}
let arr1 = ['Pierre', 'Richard', 1934];
arrLog(arr1);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textP = (txt) => document.write(`<p>${txt}</p>`);
textP('Довільний текст параграфа');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (lTxt) => {
    document.write(`<ul>
        <li>${lTxt}</li>
        <li>${lTxt}</li>
        <li>${lTxt}</li>
        </ul>`);
}
list('Елемент списку');


// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list2 = (lTxt,count) => {
    document.write('<ul>');
    for (let i = 0; i <= count; i++) {
        document.write(`<li>${lTxt}</li>`);
    }
    document.write('</ul>');
}
list2('Елемент ще одного списку', 5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let list3 = (arr) => {
    document.write('<ul>');
    for (let elem of arr) {
        document.write('<li>'+elem +'</li>');
    }
    document.write('</ul>');
}
let arr2 = [true, 56, 'Vasya', false, -154];
list3(arr2);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr3 = [
    {
        id: 1,
        name: 'Pierre Richard',
        age: 87
    },
    {
        id: 2,
        name: 'Gerard Depardieu',
        age: 72
    },
    {
        id: 3,
        name: 'Jean Paul Belmondo',
        age: 88
    }
];
let actors = (arr) => {
    for (i = 0; i < arr.length; i++){
        document.write(`<div>${arr[i].id}. ${arr[i].name}, ${arr[i].age} years old </div>`);
    }
}
actors(arr3);