
const sessions = localStorage.getItem('sessions');
//Зчитуємо дані із локального сховища за ключем 'sessions'.

const data = sessions ? JSON.parse(sessions) : [];
//Перевіряємо, чи є дані в 'sessions'. Якщо так, розпаковуємо JSON-рядок у масив об'єктів data. Якщо дані відсутні, створюємо порожній масив.

for (const item of data) {
    const block = document.createElement('div');
    block.innerText = item.date;
    document.body.appendChild(block);
}

//Отже, на сторінці 2 виводяться блоки з датами, які були збережені на сторінці 1 за допомогою локального сховища.