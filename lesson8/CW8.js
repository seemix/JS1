// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

//a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').classList.toggle('september-2021');

// b) робить шириниу елементу ul 400px
let pUl = document.getElementsByTagName('ul');
for (const p of pUl) {
    p.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElements = document.getElementsByClassName('linkList');
for (const linkListElement of linkListElements) linkListElement.style.width = '50%'

// d) отримує текст який зберігається в елементі з класом listElement2
let txt = document.getElementsByClassName('listElement2')[0].textContent;
console.log(txt);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liLst = document.getElementsByTagName('li');
for (const liLstElement of liLst) liLstElement.style.backgroundColor = 'gray';

// f) отримує всі елементи 'a' та додає їм клас anchor
let linkList = document.getElementsByTagName('a');
for (const linkListElement of linkList) linkListElement.classList.add('anchor');

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const linkListElement of linkList) {
   if (linkListElement.textContent === 'link3') linkListElement.style.fontSize = '40px';
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let currClass = '';
for (const linkListElement of linkList) {
    currClass = 'element_' + linkListElement.textContent;
    linkListElement.classList.add(currClass);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subH = document.getElementsByClassName('sub-header');
let backColor = 'gray';
for (const subHElement of subH) {
    backColor = prompt('Введіть колір:');
    subHElement.style.backgroundColor = backColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
txtColor = prompt('Введіть колір тексту:');
for(const subHElement of subH) {
       if (subHElement.innerText === 'content 2 segment') subHElement.style.color = txtColor;
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName('content_1')[0].innerText = prompt('Введіть текст для content_1:');

// l) отримати елементи p та змінити їм padding на 20px
let par = document.getElementsByTagName('p');
for (const parElement of par) {
    parElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let txt2 = document.getElementsByClassName('text2');
for (const txt2Element of txt2) {
    txt2Element.innerText = 'sep-2021';
}



