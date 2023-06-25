# full-stack-mern-jwt-authentication

This project is a full stack mern application that illustrates authentication using JSONWEBTOKEN (JWT)

## How to use this project
First pull the repository into your pc

### Run the backend
Then open the project in vs code 

Then type cd server and when you are on the server type cp .env.example .env and then inside .env file fill up the variable environements with their values

Then type npm install

Then type npm run dev

To create a user open postman or insomnia then
choose post request method and enter this url http://localhost:4000/api/auth/register
in the request body chose json format and then past  this json object
{
  "email":"a@a.com",
  "passwords":"123"
}
### Run the frontend
Inside the project go to client folder and then type npm install and then type npm run dev

Go to your browser and open the link http://localhost:5173
