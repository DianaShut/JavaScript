const block = document.getElementById('count');

const currentDate =  new Date().getTime();
////Отримання поточної дати у мілісекундах

const date = Number(localStorage.getItem('lastRefresh')) || currentDate;
//Отримання попередньої дати оновлення з локального сховища або встановлення поточної дати, якщо значення в сховищі не існує.

let count  =  Number(localStorage.getItem('count')) || 100;
//Отримання попереднього значення лічильника з локального сховища або встановлення значення за замовчуванням (100), якщо значення в сховищі не існує.

if  (currentDate - date > 1000) {
    count += 10;
    localStorage.setItem('count', count);
}

localStorage.setItem('lastRefresh', currentDate.toString());
block.innerText = `${count}грн`;