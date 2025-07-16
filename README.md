# 🛒 eCommerceAPI

eCommerceAPI is a RESTful backend API built using **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**. It allows users to register, log in, add items to their cart, and admins to manage products.

---

## 🚀 Features

### 🧑‍💻 User Features
- Register a new user → `POST /users/register`
- Login and receive JWT token → `POST /users/login`

### 🛍️ Product Management (Admin)
- Create a product → `POST /products/create`
- View all products → `GET /products`
- Update product quantity → `POST /products/:id/quant?quantity=value`
- Delete a product → `DELETE /products/:id`

### 🛒 Cart (Authenticated Users)
- Add item to cart → `POST /cart/add`
- View cart items → `GET /cart`


---

## 📦 Installation & Running the App

1. **Clone the repository**


git clone https://github.com/nageshgithub3/eCommerceAPI.git
cd eCommerceAPI

2. Install dependencies
npm install

3. Create a .env file
   PORT=5000
MONGODB_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key

4.Start the development server
npm start
http://localhost:5000

# 📂 Folder Structure
eCommerceAPI/
│
├── config/
│   ├── mongoose.js
│   └── passport-jwt-strategy.js
│
├── controllers/
│   ├── home_controller.js
│   ├── product_controller.js
│   ├── user_controller.js
│   └── cart_controller.js
│
├── models/
│   ├── product.js
│   ├── user.js
│   └── cart.js
│
├── middleware/
│   └── auth.js
│
├── routes/
│   ├── index.js
│   ├── product.js
│   ├── users.js
│   └── cart.js
│
├── node_modules/
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md


# 🧪 API Testing (Postman)
Make requests using Postman:

1. Register a user
POST /users/register

2. Login and copy JWT token
POST /users/login

3. Use token in Headers → Authorization: Bearer <your_token>

4.Add products to cart
POST /cart/add
