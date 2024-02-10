const h1 = document.createElement('h1');
const button = document.createElement('button');

h1.innerText = 'TEEEEXT';
button.innerText = 'CLICK';

document.body.append(h1, button);

let flag = true;
button.addEventListener('click', () => {
    h1.style.display = flag ? 'none' : 'block';
    flag = !flag; // Змінює значення flag на протилежне, тобто якщо воно було true, то стає false, і навпаки.
})

//Отже, при кожному кліку на кнопку, текстовий блок h1 буде перемикатися між видимим і невидимим станом.