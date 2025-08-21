📒 HisabBook

HisabBook is a **Personal + Business Finance Tracker** built with the **MERN stack** that helps users manage their daily income and expenses with ease.  
It provides a clean and intuitive dashboard with insightful analytics to track spending, savings, and revenue growth in real-time.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure login & signup with JWT.  
- 💰 **Expense & Income Tracking** – Add, update, and delete transactions.  
- 🏷️ **Categorization** – Label transactions (Food, Rent, Travel, Salary, etc.).  
- 👤 **Personal Mode** – Manage individual expenses like groceries, bills, shopping.  
- 🏢 **Business Mode** – Track business-related cash flow, payments, and expenses.  
- 📊 **Interactive Dashboard** – Visualize data with charts and graphs.  
- 🔍 **Search & Filter** – Quickly find transactions by date, category, or amount.  
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile.  

---

🛠️ Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Recharts (for charts & graphs)  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB (Mongoose for schema & queries)  

**Authentication:**  
- JSON Web Tokens (JWT)  

---

## 📂 Project Structure

HisabBook/
│── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── utils/
│
│── server/ # Node.js backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── middleware/
│
│── package.json
│── README.md

🔹 Backend Setup
cd server
npm install
npm start

🔹 Frontend Setup
cd client
npm install
npm start

🔹 Environment Variables

Create a .env file in the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🎯 Future Enhancements

Export reports to Excel/PDF

Multi-user collaboration (for businesses)

AI-based spending insights and recommendations

Dark mode support

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue
 or submit a PR.

📜 License

This project is licensed under the MIT License
