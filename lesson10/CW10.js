// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement('form');
form1.id = 'firstForm';
let input1 = document.createElement('input');
input1.type = 'text';
input1.name = 'first';
let input2 = document.createElement('input');
input2.type = 'text';
input2.name = 'second';
form1.append(input1,input2);
document.body.appendChild(form1);
let form2 = document.createElement('form');

form2.id = 'secondForm';
let input3 = document.createElement('input');
input3.type = 'text';
input3.name = 'third';
let input4 = document.createElement('input');
input4.type = 'text';
input4.name = 'fourth';
form2.append(input3,input4);
document.body.appendChild(form2);

let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText = 'Send forms data';
btn.onclick = function () {
    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
}
document.body.appendChild(document.createElement('hr'));

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let div1 = document.createElement('div');
div1.innerText = 'Rows: ';
let tInput1 = document.createElement('input');
tInput1.id = 'rows';
tInput1.type = 'number';
div1.appendChild(tInput1);
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.innerText = 'Columns: ';
let tInput2 = document.createElement('input');
tInput2.id = 'columns';
tInput2.type = 'number';
div2.appendChild(tInput2);
document.body.appendChild(div2);

let div3 = document.createElement('div');
div3.innerText = 'Content: ';

let tInput3 = document.createElement('input');
tInput3.id = 'content';
tInput3.type = 'text';
div3.appendChild(tInput3);
document.body.appendChild(div3);

let buildTable = document.createElement('button');
buildTable.innerText = 'Build Table';
document.body.appendChild(buildTable);
buildTable.onclick = function () {
    const rows = tInput1.value;
    const columns = tInput2.value;
    const content = tInput3.value;
    const table = document.createElement('table');

    for (let row = 0; row < rows; row++) {
        let tr = document.createElement('tr');
        for (let column = 0; column < columns; column++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    document.body.appendChild(table);
}
document.body.appendChild(document.createElement('hr'));


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

const arr = ['мат','ругань','брань','лайка'];
let word = document.createElement('input');
word.type = 'text';
document.body.appendChild(word);
let checkButton = document.createElement('button');
checkButton.innerText = 'Check the word!'
document.body.appendChild(checkButton);
checkButton.onclick = function () {
    if (arr.includes(word.value.toLowerCase())) alert('Поводьтесь чемно!')
    else alert('Все ок!');
}
document.body.appendChild(document.createElement('hr'));
    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку
let sentence = document.createElement('input');
sentence.type = 'text';
document.body.appendChild(sentence);
let checkSenButton = document.createElement('button');
checkSenButton.innerText = 'Check the sentence!'
document.body.appendChild(checkSenButton);
checkSenButton.onclick = function () {
    let sWords = sentence.value.split(' ');
    sWords.forEach(sWord => {
       if (arr.includes(sWord.toLowerCase())) alert('Поводьтесь чемно!');
    })
}