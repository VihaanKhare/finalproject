# 🧠 WhiteBoardX — Real-Time Collaborative Whiteboard

**WhiteBoardX** is a web-based collaborative whiteboard application that replicates the functionality of a physical whiteboard — with a rich set of drawing tools, real-time updates, and seamless multi-user collaboration.

This project was built in response to a web development problem statement focused on creating a **real-time drawing tool** for teams, educators, and creators.

---

## 🎯 Objective

To design and develop a real-time whiteboard platform that allows multiple users to draw, write, and interact on a shared canvas — just like a traditional whiteboard, but accessible from anywhere in the world.

---

## ✨ Key Features

### 🎨 Drawing Tools
- Freehand drawing (pen tool)
- Shapes: rectangle and circle
- Text input tool
- Eraser
- Color picker for strokes and fill

### ⚡ Real-Time Collaboration
- Live updates using **Socket.IO** — all participants see changes instantly
- Multiple users can join the same room and collaborate in sync

### 🔗 Multi-User Sessions
- Shareable links to join whiteboard sessions
- Create **public** or **private** rooms with access control (edit/view-only)

### 📁 Canvas Management
- Undo and Redo functionality
- Clear canvas button
- Download canvas as **image** or **PDF**

### 💬 Communication Tools (Optional Enhancements)
- Real-time chat sidebar for participants
- (Optional) Voice call integration for discussion while drawing

---

## 🧱 Tech Stack

### 🔹 Frontend
- **Next.js** (React framework)
- **HTML5 Canvas API** for drawing interface
- **Tailwind CSS** for styling
- **Recoil** for global state management
- **Framer Motion** for animations

### 🔹 Backend
- **Node.js**
- **Socket.IO** for real-time communication

### 🔹 Database (Future scope)
- **MongoDB** or **Firebase** (for storing user/session/room data)

### 🔹 Deployment
- **Frontend**: Vercel
- **Backend**: Render / Heroku

---

## 📺 Live Demo : 

---

## 🛠️ Getting Started

### 🔧 Prerequisites

Ensure you have the following installed:
- Node.js (v16+)
- npm or yarn

### 🧩 Clone the Repository

```bash
git clone https://github.com/VihaanKhare/finalproject.git
cd finalproject
