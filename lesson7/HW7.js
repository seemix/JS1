//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = [];
user[0] = new User(1, 'Георгій', 'Бущан', 'gb@ukr.ua','000-111-1111');
user[1] = new User(3, 'Віталій', 'Миколенко', 'vm@ukr.ua','000-222-2222');
user[2] = new User(8, 'Ілля', 'Забарний', 'iz@ukr.ua','000-111-3333');
user[3] = new User(9, 'Микола', 'Матвієнко', 'mm@ukr.ua','000-111-4444');
user[4] = new User(7, 'Сергій', 'Кривцов', 'sk@ukr.ua','000-111-5555');
user[5] = new User(5, 'Олександр', 'Зінченко', 'oz@ukr.ua','000-111-6666');
user[6] = new User(6, 'Олександр', 'Караваєв', 'ok@ukr.ua','000-111-7777');
user[7] = new User(3, 'Віктор', 'Циганков', 'vt@ukr.ua','000-111-8888');
user[8] = new User(2, 'Роман', 'Яремчук', 'ry@ukr.ua','000-111-9999');
user[9] = new User(10, 'Андрій', 'Ярмоленко', 'ay@ukr.ua','000-111-0000');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let user2 = user.filter(user => user.id % 2 === 0);
//console.log(user2);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
user2.sort((a,b) => a.id - b.id);
console.log(user2);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surnme, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surnme = surnme;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
clients[0] = new Client(1, 'Георгій', 'Бущан', 'gb@ukr.ua','000-111-1111',['Рыба свежая', 'Филе', 'Печень трески']);
clients[1] = new Client(3, 'Віталій', 'Миколенко', 'vm@ukr.ua','000-222-2222',['Куриные бедра']);
clients[2] = new Client(8, 'Ілля', 'Забарний', 'iz@ukr.ua','000-111-3333',['Оливки', 'Маслины']);
clients[3] = new Client(9, 'Микола', 'Матвієнко', 'mm@ukr.ua','000-111-4444',['Грибы', 'Кукуруза','Фасоль','Помидоры']);
clients[4] = new Client(7, 'Сергій', 'Кривцов', 'sk@ukr.ua','000-111-5555',['Орбит','Дирол','Холлс']);
clients[5] = new Client(5, 'Олександр', 'Зінченко', 'oz@ukr.ua','000-111-6666',['Вафли', 'Пряники']);
clients[6] = new Client(6, 'Олександр', 'Караваєв', 'ok@ukr.ua','000-111-7777',['Кексы']);
clients[7] = new Client(3, 'Віктор', 'Циганков', 'vt@ukr.ua','000-111-8888',['Рис','Гречка']);
clients[8] = new Client(2, 'Роман', 'Яремчук', 'ry@ukr.ua','000-111-9999',['Спагетти']);
clients[9] = new Client(10, 'Андрій', 'Ярмоленко', 'ay@ukr.ua','000-111-0000',[]);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients = clients.sort((a,b) => a.order.length - b.order.length );
console.log(clients);