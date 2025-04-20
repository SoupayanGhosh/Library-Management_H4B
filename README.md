# 📚 Online Library Management System (Subscription On Demand)

An innovative subscription-based library system designed for educational institutions to manage book borrowing efficiently. Built with a modern tech stack and designed to be scalable, secure, and user-friendly for both students and administrators.

---

## 🧩 Tech Stack

| Technology     | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| *Vite*        | Lightning-fast bundler and development server                               |
| *TypeScript*  | Superset of JavaScript for strong typing                                    |
| *React*       | Frontend library for building dynamic UIs                                   |
| *shadcn/ui*   | Accessible, prebuilt React UI components                                    |
| *Tailwind CSS*| Utility-first CSS framework for rapid UI styling                            |
| *Node.js*     | Server-side JavaScript runtime                                              |
| *Express.js*  | Web framework for backend routing and API handling                          |
| *MongoDB*     | NoSQL database for user, book, and transaction data                         |

---

## 🎯 Objective

To build an *Online Library Management System* that:

- ⏳ Allows *book access only during the subscription period*.
- ❌ Eliminates dues hassle through *strict access control*.
- 🧑‍💻 Provides a *clean, intuitive interface* for both students and administrators.
- 🔄 Supports *real-time interactions and streamlined workflows*.

---

## 🔐 Key Features

### 👨‍🎓 Student Panel

- 🔐 *Secure Login/Sign-Up* system linked with the database.
- 🧾 Personalized *Dashboard* to:
  - Request new books.
  - View currently borrowed books.
  - *Renew expired subscriptions*.
- 💬 Real-time *intercommunication* with admins through book requests.

---

### 🛠 Admin Panel

- 🖥 Dedicated *Admin Dashboard* with full access to:
  - ➕ ➖ *Add, edit, or remove* books from the system.
  - 👤 *View/edit student records*.
  - ✅ ❌ *Approve or reject* book access requests.
- 📊 Real-time *request tracking system* for efficient processing and decision-making.

---

## 🔧 GitHub Integration Guide (VS Code Terminal)

### Option 1: HTTPS (Personal Access Token)
bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
git clone https://github.com/your-username/your-repo.git

> Use your *GitHub username* and *[personal access token](https://github.com/settings/tokens)* when prompted.

---

### Option 2: SSH (Recommended)
bash
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub

> Add the key to GitHub → [SSH Settings](https://github.com/settings/keys) → "New SSH key"

Then clone:
bash
git clone git@github.com:your-username/your-repo.git


