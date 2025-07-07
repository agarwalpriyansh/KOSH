# 👜 Kosh – Bag Shop Backend

**Kosh** is the backend for a fully functional e-commerce web application focused on selling bags. It is built with **Node.js**, **Express.js**, **MongoDB**, and supports features like **JWT-based authentication**, **file uploads**, **cart management**, and an **admin panel**.

---

## 🚀 Features

- 🔐 **Authentication with JWT**
  - Secure login and registration
  - Password hashing using `bcrypt`
  - Session management with JSON Web Tokens

- 🖼️ **Image Uploads**
  - Uses `multer` for handling product image uploads
  - Stores images locally or can be configured with cloud storage

- 🛍️ **Product Management**
  - Add, edit, delete products (bags)
  - Upload multiple product images
  - Product listing with dynamic rendering via EJS

- 👤 **Admin Panel**
  - Secure admin login
  - Add/edit/delete products
  - View customer orders

- 🛒 **Add to Cart**
  - Authenticated users can add products to their cart
  - Modify item quantities
  - Proceed to checkout (future scope)

- 🌐 **API Endpoints**
  - RESTful APIs for user, cart, product, and admin operations

- 🧱 **Templating with EJS**
  - Dynamic rendering of pages for products, cart, and admin views

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Templating Engine:** EJS
- **File Uploads:** Multer
- **Environment Variables:** dotenv

---

## 📁 Folder Structure

```
kosh/
├── controllers/       # Business logic
├── models/            # MongoDB schemas
├── routes/            # API & view routes
├── middlewares/       # Auth middleware, multer setup
├── views/             # EJS templates
├── public/            # Static files (CSS, images)
├── .env               # Environment variables
├── app.js             # Entry point
└── package.json
```

---

## 🔧 Setup & Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/kosh.git
cd kosh
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the server**
```bash
npm start
```

App will run at `http://localhost:5000`

---

## 📌 Future Enhancements

- Payment Gateway Integration
- Product filters & search
- Order tracking & status updates
- Cloud storage (e.g., Cloudinary or AWS S3) for images

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Author

**Priyansh Agarwal**

Feel free to ⭐ the repo if you like it!