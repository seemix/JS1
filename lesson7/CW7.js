//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,year,vendor,maxSpeed,engineCap) {
    this.model = model;
    this.year = year;
    this.vendor = vendor;
    this.maxSpeed = maxSpeed;
    this.engineCap = engineCap;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    }
    this.info = function () {
        console.log('Модель: '+this.model);
        console.log('рік випуску: '+this.year);
        console.log('Виробник: '+this.vendor);
        console.log('Максимальна швидкість: '+this.maxSpeed);
        console.log('Об\'єм двигуна: '+this.engineCap);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('Golf', 2015, 'VW', 186, 1996);
car1.increaseMaxSpeed(19);
console.log(car1);
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {

    constructor(model, year, vendor, maxSpeed, engineCap) {
        this.model = model;
        this.year = year;
        this.vendor = vendor;
        this.maxSpeed = maxSpeed;
        this.engineCap = engineCap;
    }
    drive() {
        console.log('Їдемо зі швидкістю: ' +this.maxSpeed);
    }
    info() {
        console.log('Модель: '+this.model);
        console.log('рік випуску: '+this.year);
        console.log('Виробник: '+this.vendor);
        console.log('Максимальна швидкість: '+this.maxSpeed);
        console.log('Об\'єм двигуна: '+this.engineCap);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newYear) {
        this.year = newYear;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Cind1',17,36),
    new Cinderella('Cind2',18,37),
    new Cinderella('Cind3',16,36),
    new Cinderella('Cind4',19,40),
    new Cinderella('Cind5',18,38),
    new Cinderella('Cind6',22,34),
    new Cinderella('Cind7',30,39),
    new Cinderella('Cind8',29,40),
    new Cinderella('Cind9',22,35.5),
    new Cinderella('Cind10',25,37),
];

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Vasya', 28,39);
let princess = cinderellas.find(value => value.footSize === prince.shoe);

console.log(princess);