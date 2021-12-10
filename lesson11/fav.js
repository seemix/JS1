let favorites = JSON.parse(localStorage.getItem('favorites'));
console.log(favorites);
let wrapDiv = document.createElement('div');
for (const favorite of favorites) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<h3>${favorite.name}</h3><h4>Age ${favorite.age}, status: ${favorite.status}</h4>`;
    wrapDiv.appendChild(userDiv);
    let line = document.createElement('hr');
    userDiv.appendChild(line);
}
document.body.appendChild(wrapDiv);