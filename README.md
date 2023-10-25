Flatdango - Your Movie Theater Experience
Flatdango is a web-based movie theater application that allows users to explore movie listings, view movie details, and even purchase tickets for their favorite films. Whether you're a movie fantatic or just looking for a fun night out, Flatdango has you covered!

Features
Flatdango offers the following features:

Browse Movie Listings: View a list of available movies with their titles displayed in the left-side menu. Click on any movie to see its details.

View Movie Details: Click on a movie title to display details, including the movie's poster, title, runtime, showtime, and available tickets.

Ticket Purchase: Buy tickets for a movie by clicking the "Buy Ticket" button in the movie details view. The number of available tickets decreases accordingly. A warning is displayed if the showing is sold out.

Getting Started
To get started with Flatdango, follow these simple steps:

Clone the Repository: Clone the Flatdango repository to your local machine.

bash
Copy code
git clone https://github.com/yourusername/flatdango.git
Open the HTML File: Open the index.html file in your web browser.

Explore Movies: You will see a list of available movies on the left side. Click on a movie title to view its details.

Purchase Tickets: In the movie details view, you can click the "Buy Ticket" button to purchase a ticket. The number of available tickets will decrease.

Configuration
Flatdango is designed to work with a JSON server to fetch movie data. To set up your own JSON server, follow these steps:

Install JSON-Server:

bash
Copy code
npm install -g json-server
Create a db.json file with your movie data. Use the following format:

json
Copy code
{
    "movies": [
        {
            "id": "1",
            "title": "Movie Title",
            "runtime": "Runtime",
            "capacity": 50,
            "showtime": "Showtime",
            "tickets_sold": 30,
            "description": "Movie Description",
            "poster": "Movie Poster URL"
        },
        // Add more movie objects here
    ]
}
Start the JSON server:

bash
Copy code
json-server --watch db.json
Update the apiUrl in the script.js file with the appropriate endpoint.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Flatdango was created as a fun and educational project. Special thanks to the open-source community and the developers of JSON-Server.