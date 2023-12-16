// Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'hello world', 'javascript is cool'

let str1='hello world';
console.log(str1.length);

let str2='javascript is cool';
console.log(str2.length);

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
let newString2=(str2.toUpperCase());
console.log(newString2);

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toUpperCase().toLowerCase());
console.log(newString2.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let trim=str.trim( );
console.log(trim);

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let proverb = 'Ревуть воли як ясла повні';
let words=proverb.split(" ");
console.log(words);

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] , за допомоги map  перетворити всі об'єкти в масиві на стрінгові

const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strings = numbers.map((num) => num.toString())
console.log(strings);

//створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];
let sort=nums.sort((num1,num2)=>{
    return num1-num2;
});
console.log(sort);
let sortReverse=nums.sort((num1,num2)=>{
    return num2-num1;
});
console.log(sortReverse);

//є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// відсортувати його за спаданням за monthDuration

let sort2=coursesAndDurationArray.sort((course1,course2)=>{
    return course2.monthDuration-course1.monthDuration;
});
console.log(sort2);

//відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter=coursesAndDurationArray.filter((duration)=>duration.monthDuration>5);
console.log(filter);

//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((course,index)=>({id: index + 1, ...course})));

// описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards=[
    {cardSuit: 'spade', value:6, color:'black'},
    {cardSuit: 'spade', value:7, color:'black'},
    {cardSuit: 'spade', value:8, color:'black'},
    {cardSuit: 'spade', value:9, color:'black'},
    {cardSuit: 'spade', value:10, color:'black'},
    {cardSuit: 'spade', value:'jack', color:'black'},
    {cardSuit: 'spade', value:'queen', color:'black'},
    {cardSuit: 'spade', value:'king', color:'black'},
    {cardSuit: 'spade', value:'ace', color:'black'},
    {cardSuit: 'clubs', value:6, color:'black'},
    {cardSuit: 'clubs', value:7, color:'black'},
    {cardSuit: 'clubs', value:8, color:'black'},
    {cardSuit: 'clubs', value:9, color:'black'},
    {cardSuit: 'clubs', value:10, color:'black'},
    {cardSuit: 'clubs', value:'jack', color:'black'},
    {cardSuit: 'clubs', value:'queen', color:'black'},
    {cardSuit: 'clubs', value:'king', color:'black'},
    {cardSuit: 'clubs', value:'ace', color:'black'},
    {cardSuit: 'diamond', value:6, color:'red'},
    {cardSuit: 'diamond', value:7, color:'red'},
    {cardSuit: 'diamond', value:8, color:'red'},
    {cardSuit: 'diamond', value:9, color:'red'},
    {cardSuit: 'diamond', value:10, color:'red'},
    {cardSuit: 'diamond', value:'jack', color:'red'},
    {cardSuit: 'diamond', value:'queen', color:'red'},
    {cardSuit: 'diamond', value:'king', color:'red'},
    {cardSuit: 'diamond', value:'ace', color:'red'},
    {cardSuit: 'heart', value:6, color:'red'},
    {cardSuit: 'heart', value:7, color:'red'},
    {cardSuit: 'heart', value:8, color:'red'},
    {cardSuit: 'heart', value:9, color:'red'},
    {cardSuit: 'heart', value:10, color:'red'},
    {cardSuit: 'heart', value:'jack', color:'red'},
    {cardSuit: 'heart', value:'queen', color:'red'},
    {cardSuit: 'heart', value:'king', color:'red'},
    {cardSuit: 'heart', value:'ace', color:'red'}
    ]
console.log(cards);

// знайти піковий туз
console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));

// всі шістки
console.log(cards.find((card) => card.value===6));

//всі червоні карти
console.log(cards.find((card) => card.color==='red'));

//всі буби
console.log(cards.find((card) => card.cardSuit==='diamond'));

//всі трефи від 9 та більше
console.log(cards.find((card)=>card.cardSuit==='clubs'&& ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)));
//

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reduce=cards.reduce((accumulator,card)=>{
    if(card.cardSuit==='spade'){
        accumulator[0].push(card);
    }if(card.cardSuit==='clubs'){
            accumulator[1].push(card);
    }if(card.cardSuit==='diamond'){
                accumulator[2].push(card);  
    }if (card.cardSuit==='heart'){
        accumulator[3].push(card)};
    return accumulator;
},[[],[],[],[]]);
console.log(reduce);

//написати пошук всіх об'єктів, в який в modules є sass
//написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sass=coursesArray.filter((course)=>course.modules.includes('sass'));
let docker=coursesArray.filter((course)=>course.modules.includes('docker'));
console.log(sass,docker);
