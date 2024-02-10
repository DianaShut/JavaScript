// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
wrap = document.getElementById('wrap');
let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(response => response.json())
    .then((users) => {
       const wrap = document.getElementById('wrapper')

        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('user-block')
            let button = document.createElement('button');
            button.classList.add('btn-user')

            div.innerText = `${user.id} - ${user.name}`;
            button.innerText = 'View more'

            div.appendChild(button);
            wrap.appendChild(div);

            button.onclick = function () {
                location.href = `user-details.html?details=${user.id}`;
            }
        }
    })
