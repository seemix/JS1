//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum (a,b,c) {
    if (a < b && a < c) console.log(a);
    else if (b < a && b < c) console.log(b);
    else if (c < a && c < b) console.log(c);
    else console.log('error!');
}
minNum(2,6,-9);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum (a,b,c) {
    if (a > b && a > c) console.log(a);
    else if (b > a && b > c) console.log(b);
    else if (c > a && c > b) console.log(c);
    else console.log('error!');
}
maxNum(2,6,9);

//- створити функцію яка повертає найбільше число з масиву
function arrMax(arr1){
    let maxNum = 0;
    for (const arr1Element of arr1) {
        if (arr1Element > maxNum) maxNum = arr1Element;
    }
    return maxNum;
}
let result = arrMax([50,70,45,900,100,-43]);
console.log(result);

//створити функцію яка повертає найменьше число з масиву
function arrMin(arr1){
    let minNum = 0;
    for (const arr1Element of arr1) {
        if (arr1Element < minNum) minNum = arr1Element;
    }
    return minNum;
}
result = arrMin([50,70,45,900,100,-43]);
console.log(result);

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arrSum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum;
}
sum = arrSum([10,20,30,40,50]);
console.log(sum);

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrAver(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum / arr.length;
}
let aver = arrAver([33,22,55,77]);
console.log(aver);

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function arrMinMax(arr) {
    minNum = 0;
    maxNum = 0;
    for (const arr1Element of arr) {
        if (arr1Element < minNum) minNum = arr1Element;
        if (arr1Element > maxNum) maxNum = arr1Element;
    }
    console.log(maxNum);
    return minNum;
}
let minimum = arrMinMax([10,55,-101,0,60]);
console.log(minimum);

//- створити функцію яка заповнює масив рандомними числами
function arrRand(lngt){
    let randomArr = [];
    for(i = 0; i < lngt; i++) {
       randomArr[i] = Math.round(Math.random()*100);
   }
    return randomArr;
}
let randomArr = arrRand(10);
console.log(randomArr);

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randRange(lngt,limit){
    let arr5 = [];
    for (i = 0; i < lngt; i++) {
        arr5[i] = Math.round(Math.random() * limit);
    }
    console.log(arr5);
}
randRange(10,500);

//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function revArr(arr) {
    let k = arr.length - 1;
    let arrRev = [];
    for (i = 0, k; i < arr.length, k >= 0; i++, k--){
        arrRev[i] = arr[k];
    }
    return arrRev;
}
let rev = revArr([1,3,5,7,9,11]);
console.log(rev);