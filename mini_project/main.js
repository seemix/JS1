    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
            wrapper.classList.add('user_wrapper');
            wrapper.innerHTML = '<h1>USERS LIST</h1>';
            for (const user of json) {
                const divUser = document.createElement('div');
                divUser.classList.add('user');
                const userName = document.createElement('div');
                userName.classList.add('user_name')

                userName.innerHTML = `<h3>${user.id}.  ${user.name}</h3>`;
                divUser.appendChild(userName);
                const detailsButton = document.createElement('div');
                const currentUser = JSON.stringify(user);
                detailsButton.innerHTML = `<a class=button1 href='user-details.html?user=${currentUser}'>DETAILS</a>`;
                divUser.appendChild(detailsButton);
                wrapper.appendChild(divUser);
                console.log(user.name);
            }
            document.body.appendChild(wrapper);
        })