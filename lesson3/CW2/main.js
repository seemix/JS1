// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arr = [2,17,13,6,22,31,45,66,100,-18];
//     1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
//     2. перебрати його циклом for
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 1;
while (i < arr.length) {
    console.log(arr[i]);
    i+=2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 1; i < arr.length; i+=2) console.log(arr[i]);

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr.length) {
    if(arr[i] % 2 === 0) console.log(arr[i]);
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) console.log(arr[i]);
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) arr[i] = 'okten';
}
for (i = arr.length; i >= 0; i--) console.log(arr[i]);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
i = arr.length;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}
for (i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
}
//перебрати циклом for та вивести  числа тільки з непарним індексом

arr = [2,17,13,6,22,31,45,66,100,-18];
if (arr.length %2 === 0 ) i = arr.length - 1;
else i = arr.length;
for (i; i >= 0; i-=2 ){
    console.log(arr[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = arr.length;
while (i >= 0) {
    if(arr[i] % 2 === 0) console.log(arr[i]);
    i--;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = arr.length; i >= 0; i--) {
    if(arr[i] % 2 === 0) console.log(arr[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"
let counter = 0;
for (i = arr.length; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
        counter ++;
    }
}
console.log('Проведено замін: '+ counter);