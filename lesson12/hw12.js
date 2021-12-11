// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
let posts = document.createElement('div');
posts.classList.add('posts');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for (const post of json) {
            let divPost = document.createElement('div');
            divPost.classList.add('post');

            let postId = document.createElement('div');
            postId.classList.add('postId');
            postId.innerText = post.id;
            divPost.appendChild(postId);

            let postTitle = document.createElement('div');
            postTitle.classList.add('postTitle');
            postTitle.innerText = post.title;
            divPost.appendChild(postTitle);

            let postBody = document.createElement('div');
            postBody.classList.add('postBody');
            postBody.innerText = post.body;
            divPost.appendChild(postBody);

            posts.appendChild(divPost);

        }
    });
document.body.appendChild(posts);



