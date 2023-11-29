//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
   document.write(`<div>Hello,winter!</div>`);
}

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    let text = 'div з індексом '+ i;
   document.write(`<div>${text}</div>`);
    }

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0
while (i<20) {
    document.write(`<h1>Holidays is coming!</h1>`);
    i++;
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
let i=1
while (i<=20) {
    let date= 'Today is '+i+' December.';
    document.write(`<h1>${date}</h1>`);
    i++;
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for(let i=0; i<listOfItems.length;i++){
    document.write('<li>' + listOfItems[i] + '</li>');
}
document.write('</ul>');


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for(let i=0;i<products.length;i++){
    document.write(`<div class="product-card">
    <h3 class="product-title">${products[i]['title']} - price - ${products[i]['price']} UAH</h3>
    <img src=${products[i]['image']} alt="" class="product-image">
    </div>`)
}


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//Користувачі зі статусом true
for(let i=0;i<users.length;i++){
    if(users[i].status){
        console.log(users[i].name);
    }
}

//Користувачі зі статусом false
for(let i=0;i<users.length;i++){
    if(!users[i].status){
        console.log(users[i].name);
    }
}

//Користувачі,які старші за 30 років
for(let i=0;i<users.length;i++){
    if(users[i].age>30){
        console.log(users[i].name);
    }
}

// перебрати циклом for та окремо вивести  числа з парним та непарним індексом
let array=[2,17,13,6,22,31,45,66,100,-18];

for(let i=0;i<array.length;i++){
    if(i%2===0){
        console.log(array[i]);
    } 
    if(i%2!==0){
        console.log(array[i]);
    }
}
//перебрати циклом for та вивести  числа тільки парні  значення
for(let i=0;i<array.length;i++){
    if(i%2===0){
        console.log(i);
    } 
}
//вивести масив в зворотньому порядку
for(let i=array.length;i>=0;i--){
    console.log(array[i]);
}

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// Використовуємо метод reverse() для зворотного порядку масиву
let reversedArray = array.reverse();
// Виводимо зворотний масив в консоль
console.log(reversedArray);

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// Використовуємо метод slice() для створення копії масиву та потім застосовуємо метод reverse()
let reversedArray = array.slice().reverse();
// Виводимо зворотний масив в консоль
console.log(reversedArray);

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let all=[1,2,6,'red', true, true, 'blue', false]

for(let i=0;i<all.length;i++){
    if(typeof all[i]==="boolean"){
        console.log(all[i]);
    }
}

let books=[
    {
        title: "Кримка чи чудовище",
        pageCount: 320,
        authors: ["Майкл Чехов", "Джеймс Паттерсон"],
        genres: ["детектив", "фентезі"]
      },
      {
        title: "Холодна серцевина",
        pageCount: 420,
        authors: ["Гільдербранд"],
        genres: ["роман", "пригоди"]
      },
      {
        title: "День триффідів",
        pageCount: 256,
        authors: ["Джон Вайндем"],
        genres: ["наукова фантастика", "постапокаліптика"]
      },
      {
        title: "Гаррі Поттер і філософський камінь",
        pageCount: 336,
        authors: ["Дж. К. Ролінг"],
        genres: ["фентезі", "пригоди"]
      },
    {
        title: "Війна і мир",
        pageCount: 1225,
        authors: ["Лев Толстой"],
        genres: ["роман", "історичний"]
      },
      {
        title: "1984",
        pageCount: 328,
        authors: ["Джордж Оруелл"],
        genres: ["антиутопія", "наукова фантастика"]
      },
      {
        title: "Майстер і Маргарита",
        pageCount: 480,
        authors: ["Михайло Булгаков"],
        genres: ["роман", "фентезі"]
      }
]
//знайти найбільшу книжку
let bookWithMostPages = books[0]
for(let i=0;i<books.length;i++){
    if(books[i].pageCount>bookWithMostPages.pageCount){
        bookWithMostPages=books[i];
    }
}
console.log(bookWithMostPages);

//знайти книжку/ки з найдовшою назвою
let bookWithLongestTitle = books[0]
for(let i=0;i<books.length;i++){
    if(books[i].title.length>bookWithLongestTitle.title.length){
        bookWithLongestTitle=books[i];
    }
}
console.log(bookWithLongestTitle);

//знайти книжку/ки які писали 2 автори
let bookWithTwoAuthors = null;

for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 2) {
    bookWithTwoAuthors = books[i];
    break; // Зупинити цикл, якщо знайдено книгу з двома авторами
  }
}
console.log(bookWithTwoAuthors);

//Створити пустий масив та заповни його 50 парними числами за допомоги циклу.
let evenNumbersArray = [];
for (let i = 2; i <= 100; i += 2) {
  evenNumbersArray.push(i);
}
console.log(evenNumbersArray);