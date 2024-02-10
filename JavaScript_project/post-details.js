const postId = new URL(location.href).searchParams.get('postId');

const postInfo = async () => {
    const response = await fetch
    (`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();

    const wrapPost = document.getElementById('posts-container');

    const ul = document.createElement('ul');
    ul.classList.add('post-info')
    const userId = document.createElement('li');
    const id = document.createElement('li');
    const title = document.createElement('li');
    const body = document.createElement('li');

    userId.innerText = `UserId: ${post.userId}`;
    id.innerText = `Id: ${post.id}`;
    title.innerText = `Title: ${post.title}`;
    body.innerText = `Body: ${post.body}`;

    ul.append(userId, id, title,body);
    wrapPost.appendChild(ul);
}

void postInfo();

const getComments = async() => {
    const responseCom = await fetch
    (`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await responseCom.json();
    console.log(comments);

    const wrapCom = document.getElementById('comments-block');

    for (const comment of comments)  {
        const comInfo = document.createElement('ul');
        comInfo.classList.add('ul-com')
        const id = document.createElement('li');
        const name = document.createElement('li');
        const email = document.createElement('li');
        const body = document.createElement('li');

        id.innerText = `Id: ${comment.id}`;
        name.innerText = `Name: ${comment.name}`;
        email.innerText = `Email: ${comment.email}`;
        body.innerText = `${comment.body}`;

        comInfo.append(id,name, email, body);
        wrapCom.appendChild(comInfo);
    }
}
void getComments();
