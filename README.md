# 🍪 Cookie Auth API (Node.js)

# project
Cookie-based authentication system using Express and cookie-parser.

Simple login, logout, and protected routes using cookies.

# features
- Login system (static users)
- Cookie authentication 🍪
- Protected dashboard route
- Logout functionality
- JSON API responses

# tech
- Node.js
- Express.js
- cookie-parser

# auth flow
1. Login request
2. Server validates user
3. Cookie is created 🍪
4. Cookie sent automatically with requests
5. Server checks cookie for protected routes
6. Logout clears cookie

# routes
- GET  /           → home
- POST /login      → login user
- GET  /dashboard  → protected route
- GET  /logout     → clear cookie

# users
john / 123 / admin  
Sarah / 456 / user  

# run
npm install  
node server.js  

# url
http://localhost:3001

# security
- httpOnly cookie  
- sameSite protection  
- basic auth flow  

# learn
- cookie auth basics  
- express routing  
- API authentication flow  

# improvements
- MongoDB integration  
- bcrypt password hashing  
- JWT authentication  
- role-based access
