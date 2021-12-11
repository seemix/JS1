//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let posts = document.createElement('div');
posts.classList.add('posts');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
        for (const comment of json) {
            let divComment = document.createElement('div');
            divComment.classList.add('post');

            let commentId = document.createElement('div');
            commentId.classList.add('postId');
            commentId.innerText = comment.id;
            divComment.appendChild(commentId);

            let commentName = document.createElement('div');
            commentName.classList.add('postTitle');
            commentName.innerText = comment.name;
            divComment.appendChild(commentName);

            let commentEmail = document.createElement('div');
            commentEmail.classList.add('email');
            commentEmail.innerText = comment.email;
            divComment.appendChild(commentEmail);

            let commentBody = document.createElement('div');
            commentBody.classList.add('postBody');
            commentBody.innerText = comment.body;
            divComment.appendChild(commentBody);

            posts.appendChild(divComment);

        }
    });
document.body.appendChild(posts);


