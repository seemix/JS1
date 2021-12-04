//
//

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.body.appendChild(document.createElement('hr'));
let div = document.createElement('div');
div.id = 'text';
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'navy';
document.body.appendChild(div);
let btn = document.createElement('button');
btn.id = 'hide';
btn.innerText = 'Hide blue block!';
document.body.appendChild(btn);
let btnClick = document.getElementById('hide');
btnClick.onclick = function () {
    div.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.body.appendChild(document.createElement('hr'));
let btn2 = document.createElement('button');
btn2.id = 'selfHide';
btn2.innerText = 'Hide this button!';
document.body.appendChild(btn2);
btn2.onclick = function () {
    btn2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.body.appendChild(document.createElement('hr'));
let input1 = document.createElement('input');
input1.type = 'number';
input1.name = 'age';
document.body.appendChild(input1);
let btn3 = document.createElement('button');
btn3.innerText = 'Check age';
document.body.appendChild(btn3);
btn3.onclick = function () {
    if(!input1.value) console.log('Некоректний вік!');
    else if (input1.value >= 18) {
        console.log('Все ОК!');
    } else console.log('Вік користувача меньше 18 років');
}

// - Создайте меню, которое раскрывается/сворачивается при клике
document.body.appendChild(document.createElement('hr'));
let menu = document.getElementsByClassName('menu1')[0];
let menuList = document.getElementsByClassName('menuHeader')[0];
menuList.onclick = function () {
    menu.classList.toggle('hide');
}

//     - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//      Добавьте каждому комментарию по кнопке для сворачивания его body.
document.body.appendChild(document.createElement('hr'));

const comments = [
    {
        title: 'Vasia',
        body: 'Please try out this demo of our new Tiny Comments premium plugin.'
    },
    {
        title: 'Petya',
        body: 'Comment sidebar, and click ‘Start’'
    },
    {
        title: 'Kolya',
        body: 'Make sure to check out our documentation as well.'
    }
]

for (const comment of comments) {
    let divCom = document.createElement('div');
    let divH = document.createElement('div');
    let divTxt = document.createElement('div');
    divH.innerHTML = '<h3>' + comment.title + '</h3>';
    divTxt.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'Hide/Show comment';
    btn.onclick = function () {
        divTxt.classList.toggle('hide');
    }
    divCom.append(divH,divTxt,btn);
    document.body.appendChild(divCom);
}