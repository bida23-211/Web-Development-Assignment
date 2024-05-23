const apps = [
    { name: "Injustice 2", image: "Injustice 2.jpg", href: "game1.html" },
    { name: "Mortal Kombat 9", image: "Mortal Kombat 9.jpeg", href: "game2.html" },
    { name: "Scooby Doo", image: "Scooby Doo.jpeg", href: "app1.html" },
    { name: "Game Of Thrones Hogwards Mystery", image: "Hogward Mystery.jpeg", href: "app2.html" }
];

const content = document.getElementById('content');

apps.forEach(app => {
    const appElement = document.createElement('div');
    appElement.classList.add('app');
    appElement.innerHTML = `
        <img src="${app.image}" alt="${app.name}">
        <h2>${app.name}</h2>
        <a href="${app.href}" target="_blank">View More</a>
    `;
    content.appendChild(appElement);
});