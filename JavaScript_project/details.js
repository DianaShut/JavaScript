// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('details');

const details = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    const wrap = document.getElementById('wrap');

    const ul = document.createElement('ul');
    ul.classList.add('user-info')
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const website = document.createElement('li');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    id.textContent = `Id: ${user.id}`;
    username.textContent = `Username: ${user.username}`;
    email.textContent = `Email: ${user.email}`;
    phone.textContent = `Phone: ${user.phone}`;
    street.textContent = `Street: ${user.address.street}`;
    suite.textContent = `Suite: ${user.address.suite}`;
    city.textContent = `City: ${user.address.city}`;
    zipcode.textContent = `Zipcode: ${user.address.zipcode}`;
    lat.textContent = `Lat: ${user.address.geo.lat}`;
    lng.textContent = `Lng: ${user.address.geo.lng}`;
    website.textContent = `Website: ${user.website}`;
    companyName.textContent = `Company Name: ${user.company.name}`;
    catchPhrase.textContent = `Catch Phrase: ${user.company.catchPhrase}`;
    bs.textContent = `Bs: ${user.company.bs}`;

    const postsButton = document.createElement('button');
    postsButton.classList.add('btn-posts')
    postsButton.textContent = 'POSTS OF CURRENT USER';

    postsButton.addEventListener('click', async () => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await postsResponse.json();

        const postsList = document.createElement('ul');
        postsList.classList.add('post-title')
        posts.forEach(post => {
            const postItem = document.createElement('li');
            postItem.textContent = post.title;

            const detailsButton = document.createElement('button');
            detailsButton.classList.add('btn-details-posts')
            detailsButton.textContent = 'DETAILS';

            detailsButton.addEventListener('click', () => {
                location.href = `post-details.html?postId=${post.userId}`;
            });

            postItem.appendChild(detailsButton);
            postsList.appendChild(postItem);
        });

        wrap.innerHTML = '';
        wrap.appendChild(ul);
        wrap.appendChild(postsList);
    });


    const hidePostsButton = document.createElement('button');
    hidePostsButton.classList.add('btn-posts');
    hidePostsButton.textContent = 'HIDE POSTS';
    hidePostsButton.addEventListener('click', () => {
        wrap.innerHTML = '';
        wrap.appendChild(ul);
    });

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs);
    wrap.appendChild(ul);
    document.body.append(postsButton, hidePostsButton);
};

void details();






