//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
const users=[
    new User(5, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231'),
    new User(8, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231'),
    new User(6, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631'),
    new User(3, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111'),
    new User(1, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555'),
    new User(4, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345'),
    new User(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787'),
    new User(2, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777'),
];
console.log(users)

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let ovenId= users.filter((user)=>user.id%2===0);
console.log(ovenId)

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort= users.sort((user1,user2)=>{
    return user1.id- user2.id});
console.log(sort)

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}
const clients=[
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear']),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
]
console.log(clients);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrder=clients.sort((client1,client2)=>{return client1.order.length-client2.order.length});
console.log(sortOrder)

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info(){
        console.log(`модель: ${model}, виробник: ${producer}, рік випуску: ${year}, максимальна швидкість: ${maxSpeed}, об'єм двигуна: ${volume}`)
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
            this.driver = driver;
        }
}
const car1 = new Car1('X6', 'BMW', 2010, 200, 2);

// - (Те саме, тільки через клас)
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log('------------ INFO CLASS ------------')
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.volume);
        // console.log(`driver : ${this.driver?.name} | ${this.driver?.age}`);
        console.log('driver : ', this.driver);
        console.log('------------ INFO CLASS ------------')
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

Car2.drive()
const car2 = new Car2('X6', 'BMW', 2010, 200, 2);

//Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cinderella extends Human {
    constructor(name, age, footSize) {
        super(name, age)
        this.footSize = footSize;
    }
}
const popelArr = [
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age)
        this.bootSize = bootSize;
    }
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    findCinderella1(arr) {
        if (!this.bootSize) throw new Error('нема)')
        for (const cinderella of arr) {
            if (cinderella.footSize === this.bootSize) {
                return cinderella;
            }
        }
    }
    const prince1 = new Prince('Sergey', 18);

    try {
    const cinderella1 = prince1.findCinderella1(popelArr);
    console.log('cinderella1: ', cinderella1);
} catch (e) {
    console.error(e.message);
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
findCinderella2(arr) {
    if (!this.bootSize) throw new Error('нема)')
    return arr.find((cinderella) => cinderella.footSize === this.bootSize);
}
}
const prince2 = new Prince('Sergey', 18, 46);

try {
    const cinderella2 = prince2.findCinderella2(popelArr);
    console.log('cinderella2: ', cinderella2);
} catch (e) {
    console.error(e.message);
}