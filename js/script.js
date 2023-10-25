document.addEventListener("DOMContentLoaded", () => {
            const filmsUrl = 'http://localhost:3000/films'; 

            
            fetch(filmsUrl)
                .then((response) => response.json())
                .then((data) => {
                    const filmList = document.getElementById('films');

                
                    const placeholder = document.getElementById('placeholder');
                    placeholder.remove();

                
                    data.forEach((movie) => {
                        const li = document.createElement('li');
                        li.className = 'film-item';
                        li.textContent = movie.title;
                        li.addEventListener('click', () => {
                            displayMovieDetails(movie);
                        });
                        filmList.appendChild(li);
                    });

                
                    if (data.length > 0) {
                        displayMovieDetails(data[0]);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching movie data:', error);
                });

            function displayMovieDetails(movie) {
                const movieTitle = document.getElementById('movie-title');
                const movieRuntime = document.getElementById('movie-runtime');
                const movieDescription = document.getElementById('movie-description');
                const movieShowtime = document.getElementById('movie-showtime');
                const moviePoster = document.getElementById('movie-poster');
                const availableTickets = document.getElementById('available-tickets');
                const buyButton = document.getElementById('buy-button');

                movieTitle.textContent = movie.title;
                movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
                movieDescription.textContent = `Description: ${movie.description}`;
                movieShowtime.textContent = `Showtime: ${movie.showtime}`;
                moviePoster.src = movie.poster;

                const available = movie.capacity - movie.tickets_sold;
                availableTickets.textContent = `Available Tickets: ${available}`;

                buyButton.addEventListener('click', () => {
                    if (available > 0) {
                        availableTickets.textContent = `Available Tickets: ${available - 1}`;
                        available--;
                    } else {
                        alert('Sorry, this showing is sold out!');
                    }
                });

                document.getElementById('movie-info').style.display = 'block';
            }
        });
