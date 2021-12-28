let url = new URL(location.href);
let user = url.searchParams.get('user');
   user = JSON.parse(user);

//console.log(user);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper', 'wrapper_details');
wrapper.innerHTML = '<h1>USER DETAILS</h1>';
const detailsWrapper = document.createElement('div');
detailsWrapper.classList.add('details');
const divId = document.createElement('div');
divId.classList.add('user', 'user_details');
divId.innerText = `UserID: `;
detailsWrapper.appendChild(divId);

const divIdText = document.createElement('div');
divIdText.classList.add('user', 'user_details');
divIdText.innerHTML = `<i>${user.id}</i>`;
detailsWrapper.appendChild(divIdText);

const divName = document.createElement('div');
divName.classList.add('user', 'user_details');
divName.innerText = `User Name: `;
detailsWrapper.appendChild(divName);

const divNameText = document.createElement('div');
divNameText.classList.add('user', 'user_details');
divNameText.innerHTML = `<i>${user.name}</i>`;
detailsWrapper.appendChild(divNameText);

const divUserName = document.createElement('div');
divUserName.classList.add('user', 'user_details');
divUserName.innerText = `Login: `;
detailsWrapper.appendChild(divUserName);

const divUserNameText = document.createElement('div');
divUserNameText.classList.add('user', 'user_details');
divUserNameText.innerHTML = `<i>${user.username}</i>`;
detailsWrapper.appendChild(divUserNameText);

const divEmail = document.createElement('div');
divEmail.classList.add('user', 'user_details');
divEmail.innerText = `e-mail: `;
detailsWrapper.appendChild(divEmail);

const divEmailText = document.createElement('div');
divEmailText.classList.add('user', 'user_details');
divEmailText.innerHTML = `<i>${user.email}</i>`;
detailsWrapper.appendChild(divEmailText);

const divPhone = document.createElement('div');
divPhone.classList.add('user', 'user_details');
divPhone.innerText = `phone: `;
detailsWrapper.appendChild(divPhone);

const divPhoneText = document.createElement('div');
divPhoneText.classList.add('user', 'user_details');
divPhoneText.innerHTML = `<i>${user.phone}</i>`;
detailsWrapper.appendChild(divPhoneText);

const divWebSite = document.createElement('div');
divWebSite.classList.add('user', 'user_details');
divWebSite.innerText = `website: `;
detailsWrapper.appendChild(divWebSite);

const divWebSiteText = document.createElement('div');
divWebSiteText.classList.add('user', 'user_details');
divWebSiteText.innerHTML = `<i>${user.website}</i>`;
detailsWrapper.appendChild(divWebSiteText);

const divAddress = document.createElement('div');
divAddress.classList.add('user', 'user_details');
divAddress.innerText = `Home address: `;
detailsWrapper.appendChild(divAddress);

const divAddressText = document.createElement('div');
divAddressText.classList.add('user', 'user_details');
divAddressText.innerHTML = `<i>${user.address.street} , ${user.address.suite}, ${user.address.city}, 
${user.address.zipcode}, lat: ${user.address.geo.lat}, 
lng: ${user.address.geo.lng}</i>`;
detailsWrapper.appendChild(divAddressText);

const divCompany = document.createElement('div');
divCompany.classList.add('user', 'user_details');
divCompany.innerText = `Company info: `;
detailsWrapper.appendChild(divCompany);

const divCompanyText = document.createElement('div');
divCompanyText.classList.add('user', 'user_details');
divCompanyText.innerHTML = `<i><p>Name: ${user.company.name}</p><p>catchPhrase: ${user.company.catchPhrase}</p>
<p>bs: ${user.company.bs}</p></i>`;
detailsWrapper.appendChild(divCompanyText);

wrapper.appendChild(detailsWrapper);

//console.log(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
const detailsButton = document.createElement('button');

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(json => {
       const postsDiv = document.createElement('div');
       postsDiv.id ='user_posts';

       detailsButton.innerText = 'Show posts of current user';
       detailsButton.classList.add('button1', 'button2');
       wrapper.appendChild(detailsButton);

       detailsButton.onclick = function() {
           if(detailsButton.innerText === 'Show posts of current user') {
               postsDiv.style.display = 'block';
               detailsButton.innerText = 'Hide posts of current user';
           }
           else if(detailsButton.innerText === 'Hide posts of current user'){
               postsDiv.style.display = 'none';
               detailsButton.innerText = 'Show posts of current user';
           }
         }
        const postsWrapper = document.createElement('div');
        postsWrapper.classList.add('user_wrapper', 'comments_wrapper');
       for (const post of json) {
          const currentPost = document.createElement('div');
          currentPost.classList.add('user');
          currentPost.innerHTML = `<p class='post_title'> ${post.title}</p>`;
           const detailsButton = document.createElement('div');
           const postDetails = JSON.stringify(post);
           detailsButton.innerHTML = `<a class=button1 href='post-details.html?post=${postDetails}'>DETAILS</a>`;
           currentPost.appendChild(detailsButton);
          postsWrapper.appendChild(currentPost);
           console.log(post);
       }
       postsDiv.appendChild(postsWrapper)
        wrapper.appendChild(postsDiv);
    })

document.body.appendChild(wrapper);
