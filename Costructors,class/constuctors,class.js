//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id;
    this.name;
    this.surname;
    this.email;
    this.phone;
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
]

