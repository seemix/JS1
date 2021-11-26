// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let validName = (name) => name.replace('..',' ')
                              .replace('---',' ')
                              .replace('__', ' ');
console.log(validName(n1));
console.log(validName(n2));
console.log(validName(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let randArr = (amount) => {
        let arr=[];
        for (let i = 0; i < amount; i++) arr[i] = Math.floor(Math.random()*100);
        return arr;
}
console.log(randArr(10).sort());

let randArr2 = randArr(10);
let evenNums = randArr2.filter(function(elem) {
    return elem % 2 === 0;
});console.log(evenNums);

// - створити масив рандомних цілих числових значень
// (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let randArr3 = randArr(10);
let newArr3 = randArr3.map(number => {
    return number.toString()
});
console.log(newArr3);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (arr, direction) => {
    let sortedArr = [];
    if (direction === 'ascending') {
        sortedArr = arr.sort((a,b) => a - b);
        return sortedArr;
    }
    else if (direction === 'descending') {
        sortedArr = arr.sort((a,b) => b - a);
        return sortedArr;
    }
    else return false;
}
console.log(sortNums(nums,'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];
let sortedArr1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedArr1);

let filteredArr = coursesAndDurationArray.filter(dur => dur.monthDuration > 5);
console.log(filteredArr);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n) {
    let arr4 = [];
    let i = 0;
    while (str.length > 0) {
        arr4[i] = (str.substring(0, n));
        str = str.substring(n);
        i++;
    }
    return arr4;
}
 let resCut = cutString('паралелограм', 2);
 console.log(resCut);
