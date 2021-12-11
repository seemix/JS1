// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let posts = document.createElement('div');
posts.classList.add('posts1');
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

            let btn = document.createElement('button');
            btn.innerText = 'SHOW COMMENTS';
            divPost.appendChild(btn);
            btn.onclick = function () {

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let commentBox = document.createElement('div');
                                commentBox.classList.add('commentBox');
                                commentBox.classList.toggle('hide');
                                commentBox.innerHTML = `<h4>${comment.name}</h4><p class="postBody">${comment.body}</p><p class="email">${comment.email}</p><hr>`;
                                divPost.appendChild(commentBox);
                            }
                        }
                    })
            }
            posts.appendChild(divPost);
            document.body.appendChild(posts);
        }
    });

