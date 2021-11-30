//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content').innerText;
console.log(content);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules').innerText;
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'Довільний текст параграфа. Довільний текст параграфа. Довільний текст параграфа.'

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'They performed with great success in famous Parisian cabarets and music-halls sketches they had written themselves. He then began his film career in 1968 in the film Alexandre le Bienheureux';

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let pEl = document.getElementsByTagName('p');
for (const p of pEl) {
    p.style.backgroundColor = 'red';
    p.style.color = 'blue';
}

let divEl = document.getElementsByTagName('div');
for (const div of divEl) {
    div.style.backgroundColor = 'red';
    div.style.color = 'blue';
}

let liEl = document.getElementsByTagName('li');
for (const li of liEl) {
    li.style.backgroundColor = 'red';
    li.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClassList = document.getElementById('rules').classList;
console.log(rulesClassList);

