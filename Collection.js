const movies = [
    {
        title: "HBO",
        imageUrl: "HBO.jpeg",
    },
    {
        title: "DC",
        imageUrl: "DC.jpeg",
    },
    {
        title: "Black Voices",
        imageUrl: "Black Voices.jpeg",
    },
    {
        title: "Chill and Thrill",
        imageUrl: "Chill and Thrill.jpeg",
    },
];

const movieContainer = document.getElementById("movie-container");

movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <h3>${movie.title}</h3>
        <img src="${movie.imageUrl}" alt="${movie.title}">
    `;
    movieContainer.appendChild(movieElement);
});