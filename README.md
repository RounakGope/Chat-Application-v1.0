# 💬 Chat Application

![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo?style=flat)
![GitHub forks](https://img.shields.io/github/forks/your-username/your-repo?style=flat)
![GitHub issues](https://img.shields.io/github/issues/your-username/your-repo)
![GitHub license](https://img.shields.io/github/license/your-username/your-repo)

A real-time chat application built using **React (Frontend)** and **Spring Boot (Backend)** with **WebSockets**. Supports sending text messages, time-ago formatting, online status, and more features you can expand in the future.

---

## 🚀 Features

* 🔥 Real-time messaging using WebSockets (STOMP)
* 👤 User authentication (JWT-based)
* 📩 Send & receive messages instantly
* 🕒 "Time ago" formatting for messages
* 📎 File attachments *(optional feature to add)*
* 🟢 Online/Offline user indicators
* 🖼 Modern and clean UI made with React

---

## 🛠️ Tech Stack

### **Frontend (React)**

* React + Vite
* React Hot Toast
* Axios
* WebSocket/StompJS

### **Backend (Spring Boot)**

* Spring WebSocket
* Spring Data JPA
* PostgreSQL / MongoDB

---

## 📂 Project Structure

### **Frontend**

```
/src
  /components
  /pages
  /utils
  /assets
```

### **Backend**

```
/src/main/java
  /controller
  /service
  /config
  /model
  /repository
```

---

## ⚙️ Environment Variables

### **Frontend (.env)**

```
VITE_BACKEND_URL=https://your-backend-url
VITE_WS_URL=wss://your-websocket-endpoint
```

### **Backend (.env or application.properties)**

```
DB_URI=

```

---

## 📦 Running the Project

### **Frontend**

```bash
yarn install
yarn dev
```

### **Backend**

```bash
mvn clean install
java -jar target/app.jar
```

---

## 🌐 Deployment

### **Frontend (Vercel)**

* Set environment variables in Vercel dashboard
* Build command: `yarn build`
* Output: `dist`

### **Backend ( / Render )**




## 📌 Roadmap

* [ ] Add file-sharing support
* [ ] Add typing indicator
* [ ] Add group chats
* [ ] Improve UI animations

---


## ✨ Author

**Rounak Gope**

