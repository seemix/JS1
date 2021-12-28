let url = new URL(location.href);
let post = url.searchParams.get('post');
post = JSON.parse(post);

console.log(post);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper', 'wrapper_details');
wrapper.innerHTML = '<h1>POST DETAILS</h1>';

const detailsWrapper = document.createElement('div');
detailsWrapper.classList.add('details');

const postId = document.createElement('div');
postId.classList.add('user', 'user_details');
postId.innerText = `Post ID: `;
detailsWrapper.appendChild(postId);

const postIdText = document.createElement('div');
postIdText.classList.add('user', 'user_details');
postIdText.innerHTML = `<i>${post.id}</i>`;
detailsWrapper.appendChild(postIdText);

const userId = document.createElement('div');
userId.classList.add('user', 'user_details');
userId.innerText = `User ID: `;
detailsWrapper.appendChild(userId);

const userIdText = document.createElement('div');
userIdText.classList.add('user', 'user_details');
userIdText.innerHTML = `<i>${post.userId}</i>`;
detailsWrapper.appendChild(userIdText);

const postTitle = document.createElement('div');
postTitle.classList.add('user', 'user_details');
postTitle.innerText = `Title: `;
detailsWrapper.appendChild(postTitle);

const postTitleText = document.createElement('div');
postTitleText.classList.add('user', 'user_details');
postTitleText.innerHTML = `<b>${post.title}</b>`;
detailsWrapper.appendChild(postTitleText);

const postBody = document.createElement('div');
postBody.classList.add('user', 'user_details');
postBody.innerText = `Body: `;
detailsWrapper.appendChild(postBody);

const postBodyText = document.createElement('div');
postBodyText.classList.add('user', 'user_details');
postBodyText.innerHTML = `<small>${post.body}</small>`;
detailsWrapper.appendChild(postBodyText);

const commentsTitle = document.createElement('div');
commentsTitle.classList.add('comments_title');
commentsTitle.innerHTML = '<h1>Comments</h1>';
detailsWrapper.appendChild(commentsTitle);


wrapper.appendChild(detailsWrapper);
commentsWrapper = document.createElement('div');
commentsWrapper.classList.add('user_wrapper', 'comments_wrapper');


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(json => {
        for (const comment of json) {
            const currentComment = document.createElement('div');
            currentComment.classList.add('user', 'comment');
            currentComment.innerHTML = `<h4>${comment.name}</h4><p>${comment.email} </p>
            <small>${comment.body}</small>`;
            commentsWrapper.appendChild(currentComment);
            console.log(comment);
            wrapper.appendChild(commentsWrapper);
        }

    })
document.body.appendChild(wrapper);

