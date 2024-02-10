const sessions = localStorage.getItem('sessions');
//Зчитуємо дані із локального сховища за ключем 'sessions'

const data = sessions ? JSON.parse(sessions) : [];
//Перевіряємо, чи є дані в 'sessions'. Якщо так, розпаковуємо JSON-рядок у масив об'єктів data. Якщо дані відсутні, створюємо порожній масив.

data.push({ date: new Date() });
//Додаємо новий об'єкт з поточною датою до масиву data.

localStorage.setItem('sessions', JSON.stringify(data));
//Зберігаємо оновлений масив data в локальному сховищі під ключем 'sessions'.