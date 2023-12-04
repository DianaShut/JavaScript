//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і b

function calculateAreaRectangle(a,b) {
    let areaRectangle=a*b;
    return areaRectangle;
}
console.log(calculateAreaRectangle(6,7));

//створити функцію привітання

function greet(name){
    let message = `Hi, ${name}!`;
    return message; 
  }
  greet('Mike');
  greet('John');  

//створити функцію яка обчислює та повертає площу круга з радіусом r

function calculateAreaCircle(r){
    let areaCircle=Math.PI*r**2;
    return areaCircle;
}
console.log(calculateAreaCircle(5));

//або
function sRound(r) {
    return Math.PI * Math.pow(r, 2);
}
console.log(sRound(4));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCilindr(r, h) {
    return 2 * Math.PI * r * (r + h);
}
console.log(sCilindr(5, 10));

//створити функцію яка приймає масив та виводить кожен його елемент

function itemOfArr(arr){
for(const item of arr){
    console.log(item);
}
}
itemOfArr([12,9,4,8,6]);


//створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writeText(text){
    document.write(`<p>${text}</p>`);
}
writeText('Hello, winter!')


//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(itemOfList){
    document.write(`<ul>`);
    document.write(
    `<li>${itemOfList}</li>
    <li>${itemOfList}</li>
    <li>${itemOfList}</li>`
    )
    document.write(`</ul>`);
}
createList('snow');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList2(itemOfList,count){
    document.write(`<ul>`);
    for(i=0;i<count;i++){
    document.write(`<li>${itemOfList}</li>`)
    document.write(`</ul>`);
}
}
createList2 ('Christmas',5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createLi(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
createLi(['sdgdfgdfg', 345, 765, 'sdfdsfsd', true, 'bla']);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createDivs(array){
    for(const user of array){
        document.write(`<div>${user.id} - ${user.name} - ${user.age} </div>`)
    }
}

const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

createDivs(users);

//створити функцію яка повертає найменше число з масиву

const numbers = [-3434, 234, 55, 45, -432, 765, 3, 2, 6, 0];

function getTheSmallestNumber(arr){
    let theSmallestNumber=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]<theSmallestNumber){
            theSmallestNumber=arr[i];
        }
    }
    return theSmallestNumber;
}
console.log(getTheSmallestNumber(numbers));

//Інший варіант
function minOfArr(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (min > num) min = num
    }
    return min;
}
console.log(minOfArr(numbers));

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumOfArray(arr){
    let sum=0;
    for(const n of arr){
        sum+=n
    }
    return sum;
}
console.log(sumOfArray(numbers));

// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr/*масив*/, index1, index2/*індекси, значення яких потрібно поміняти місцями*/) {
    //Створюємо змінну num1 і присвоюємо їй значення масиву за індексом index1
    const num1 = arr[index1];
    //Значення масиву за індексом index1 замінюємо значенням масиву за індексом index2
    arr[index1] = arr[index2];
    //Значення масиву за індексом index2 замінюємо значенням num1
    arr[index2] = num1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 2));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH/*сума в гривнях*/, currencyValues/*масив об'єктів, які представляють різні валюти та їх курси*/, exchangeCurrency/*валюта, в яку потрібно здійснити обмін*/) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency){
        /*на кожній ітерації перевіряє, чи currency.currency (валюта поточного об'єкта) дорівнює exchangeCurrency*/
            return sumUAH / currency.value
        }
    }
}
//масив currencies, який представляє валютні об'єкти з курсами (в цьому випадку, USD та EUR)
const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
//Викликає функцію exchange з аргументами 10000 (сума в гривнях), currencies (масив валютних об'єктів) та 'USD' (валюта обміну)
console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));