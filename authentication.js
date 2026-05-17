const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// ======================
// MIDDLEWARES
// ======================
app.use(express.json());
app.use(cookieParser());

// ======================
// SIMULATED DATABASE
// ======================
const users = [
  { username: "john", password: "123", role: "admin" },
  { username: "Sarah", password: "456", role: "user" },
];

// ======================
// HOME ROUTE
// ======================
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API Home Page",
  });
});

// ======================
// LOGIN ROUTE
// ======================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find user in database
  const userFound = users.find(
    (user) => user.username === username && user.password === password,
  );

  // If user not found
  if (!userFound) {
    return res.json({
      message: "Login failed: Invalid credentials",
    });
  }

  // Create cookie after successful login
  res.cookie("userData", JSON.stringify(userFound), {
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    httpOnly: true,
    secure: false, // set true in production (HTTPS)
    sameSite: "strict",
  });

  return res.json({
    message: "Login successful",
  });
});

// ======================
// DASHBOARD (PROTECTED ROUTE)
// ======================
app.get("/dashboard", (req, res) => {
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;

  // If no cookie found
  if (!userData) {
    return res.json({
      message: "Unauthorized: Please login first",
    });
  }

  return res.json({
    message: `Welcome ${userData.username}, Role: ${userData.role}`,
  });
});

// ======================
// LOGOUT ROUTE
// ======================
app.get("/logout", (req, res) => {
  res.clearCookie("userData");

  return res.json({
    message: "Logout successful",
  });
});

// ======================
// START SERVER
// ======================
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
