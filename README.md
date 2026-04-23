# 📊 Codeforces Problem Tracker

A React-based web application that tracks and visualizes your **Codeforces problem-solving progress** by fetching real-time data using the Codeforces API.

---

## 🚀 Overview

This project helps you monitor your **competitive programming journey on Codeforces** by displaying:

* Total problems solved
* List of solved problems
* Programming languages used
* Submission history insights

It provides a clean and interactive way to analyze your performance and consistency.

---

## ✨ Features

* 🔄 **Live API Integration**
  Fetches real-time data from Codeforces

* 📈 **Problem Solved Counter**
  Displays total number of problems solved

* 📜 **Solved Problem List**
  Shows all problems you’ve solved

* 💻 **Language Tracking**
  Displays which programming languages you used

* ⚡ **Dynamic UI Updates**
  Automatically updates data on refresh

---

## 🛠️ Tech Stack

* **Frontend:** React.js, JavaScript
* **API:** Codeforces Public API
* **Concepts Used:**

  * React Hooks (`useState`, `useEffect`)
  * REST API handling
  * Async data fetching

---

## 📂 Project Structure

```id="c9x4lp"
cf-tracker/
│
├── public/
├── src/
│   ├── components/        # UI components
│   ├── services/          # API calls
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

* Node.js (v14 or above)
* npm or yarn

---

### ▶️ Steps to Run

1. Clone the repository

```id="z4p7kn"
git clone https://github.com/your-username/cf-tracker.git
```

2. Navigate to the folder

```id="r8m2qx"
cd cf-tracker
```

3. Install dependencies

```id="u1k5df"
npm install
```

4. Start the development server

```id="w3n9bv"
npm start
```

5. Open in browser:

```
http://localhost:3000
```

---

## 💡 How It Works

1. User enters their Codeforces handle
2. App sends API request to Codeforces
3. Fetches submission data
4. Processes:

   * Unique solved problems
   * Languages used
5. Displays results dynamically

---

## 🧠 Key Concepts Used

* API data fetching & parsing
* State management in React
* Data filtering & aggregation
* Dynamic rendering

---

## 🚀 Future Improvements

* 📊 Graphs & analytics dashboard
* 🏆 Rating history visualization
* 🔍 Filter by difficulty/tags
* 🌙 Dark mode
* 🔐 User authentication

---

## ⚠️ Disclaimer

This project uses the **Codeforces public API** and is not officially affiliated with Codeforces.

---


## 👨‍💻 Author

**Abhisek**
💻 Competitive programmer & full-stack developer

---
