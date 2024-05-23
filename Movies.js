const moviesList = document.getElementById('movies-list');

const movies = [
    {
        title: 'The Matrix',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
        year: 1999
    },
    {
        title: 'The Dark Knight',
        image: 'The dark knight.jpeg',
        year: 2008
    },
    {
        title: 'The Nun II',
        image: 'The Nun II.jpeg',
        year: 2023
    }
];

movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    
    movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
    `;
    
    moviesList.appendChild(movieElement);
});