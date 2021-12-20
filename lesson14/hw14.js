//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function wakeUP() {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            console.log('Hello, happy new day!');
            // const todoList = ['work1', 'work2', 'work3'];
            resolve('Have fun!');
        },200)
    })
}

function takeShower() {
    return new Promise((resolve) => {
        setTimeout( () => {
            console.log('Taking shower...');
            resolve ();
        }, 1100);
    })
}

function meal(dish) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (dish) {
              console.log('Im eating ' + dish);
             resolve();
             } else {
                console.log('Be hungry (((...');
                reject('No more food!');
            }
        }, 1550);
    })
}

function gymnastics() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log('Doing exercises or running...');
            resolve();
        }, 960)
    })
}

function drinkWater(capacity) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(capacity) {
                console.log(`Drinking ${capacity} `);
            } else console.log('I have no drink!');
            resolve();
        }, 1310)
    })
}

function goToWork() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log('Driving to work...');
            resolve();
        }, 1460)
    })
}

function doJob(tasks) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (const task of tasks) {
                console.log(task);
            }
            resolve();
        }, 3500)
    })
}
function goHome() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log('The work is finished! Going home!');
            resolve();
        }, 2100)
        })
}

function readingBook(book = 'newspaper') {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Reading '+ book);
            resolve();
        }, 1800)
    })
}

wakeUP()
    .then(morning => {
        console.log('Good morning');
        return gymnastics();
    })
    .then(exercises => {
        console.log('Need shower');
        return takeShower();
    })
    .then(shower => {
        console.log('Got hungry?');
        return meal('omlet');
    })
    .then(breakfast => {
        console.log('Got thirsty?');
        return drinkWater();
    })
    .then(goWork => {
        return goToWork();
    })
    .then(working => {
        console.log('Are you ready to work?');
        return doJob(['task1', 'task2', 'task3']);
    })
    .then(dinner => {
        console.log('Its dinner time!');
        return meal('soup & salad');
    })
    .then(coffeeBreak => {
       return drinkWater('Coffee');
    })
    .then(moreWork => {
        return doJob(['Additional task', 'Additional task2']);
    })
    .then(supper => {
        console.log('More work - more food!');
        return meal('Steak & sauce');
    })
    .then(backHome => {
        return goHome();
    })
    .then(book => {
        return readingBook();
    })
    .then(hungry => {
        return meal();
    })
    .catch(hungry => {
        console.error(hungry);
    })

//Async await
// async function workingDay() {
//     const wakeup = await wakeUP();
//     const exercises = await gymnastics();
//     const shower = await takeShower();
//     const drinkTea = await drinkWater('Tea');
//     const breakfast = await meal('oatmeal');
//     const goWork = await goToWork();
//     const job1 = doJob([task100, task101, task1003]);
//     const cofeeBreak = drinkWater('cofee');
//     const goHome = goHome();
//     const reading = readingBook('Tom Sawyer');
//     const supper = meal('borsch');
// }
// workingDay();





