HNG API 2 - Fancy Numbers API

Description

This project is a simple API that provides various mathematical properties and fun facts about numbers. It determines whether a number is prime, perfect, Armstrong, even, or odd. Additionally, it calculates the digit sum and fetches a mathematical fact from NumbersAPI.

Features

Check if a number is Prime

Check if a number is Perfect

Identify if a number is Armstrong, Even, or Odd

Compute the digit sum of a number

Fetch fun facts about the number from NumbersAPI

Technologies Used

Node.js - Backend runtime

Express.js - Web framework for Node.js

Axios - HTTP client for API requests

CORS - Cross-Origin Resource Sharing middleware

Installation

Clone the repository:

git clone https://github.com/your-username/hng_api2-repo.git

Navigate into the project directory:

cd hng_api2-repo

Install dependencies:

npm install

Start the server:

node index.js

The server will start running on http://localhost:3000/
```
Usage

To use the API, make a GET request to the following endpoint:

GET http://localhost:3000/:num

Example Request

GET http://localhost:3000/28
```


```
Example Response

{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number, meaning it is the sum of its proper divisors."
}
```
File Structure

.
├── index.js               # Main server file
├── number_work_out.js     # Logic for number calculations and API fetching
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation

Dependencies

express - Web framework for Node.js

axios - HTTP request client

cors - Middleware for handling cross-origin requests

Author

Chika Mark

License

This project is licensed under the ISC License.
