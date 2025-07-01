# Smart Login System

A simple front-end web application for user authentication (Sign Up / Log In), using **HTML**, **CSS**, **JavaScript**, and **LocalStorage**.

---

## 📂 Features

- ✅ Sign Up with validation
- ✅ Prevent duplicate emails
- ✅ Log In with email and password
- ✅ Stores data in `localStorage`
- ✅ Displays user welcome message after login
- ✅ Bootstrap responsive design
- ✅ Error & success messages with basic feedback

---

## 🖼️ Live Demo

[🔗 View Smart Login Live](https://mohamed25-ai.github.io/Smart-Login/)  


---
📁 Folder Structure:

smart-login-system/
│
├── index.html                 # Login Page
├── Signup.html                # Sign Up Page
├── Home.html                  # Welcome Page after login
│
├── CSS/
│   ├── all.min.css
│   ├── bootstrap.min.css
│   └── style.css
│
├── Js/
│   ├── bootstrap.bundle.min.js
│   ├── main.js                # Handles login logic
│   ├── signup.js              # Handles signup logic
│   └── home.js                # Handles welcome message logic
│
├── README.md                  # Project overview & instructions
---

## 🛠️ How it works

1. Users sign up with name, email, and password.
2. Validations ensure input format and uniqueness of email.
3. Data is saved to `localStorage`.
4. On login, credentials are checked against stored users.
5. If correct, user is redirected to Home with a personalized welcome.

---

## 🧪 Validation Rules

- Name: Minimum 3 characters, starts with a letter.
- Email: Must follow `name@example.com`.
- Password: Not empty (you can improve this with stronger rules).

---

## 📌 Technologies Used

- HTML5
- CSS3 + Bootstrap 5
- JavaScript (ES6)
- LocalStorage API
- Font Awesome

---

## 📬 Contact

Developed by **Mohamed Ahmed**  
GitHub: [@Mohamed25-ai](https://github.com/Mohamed25-ai)




