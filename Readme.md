# 🌌 Personal Portfolio Website

A sleek, premium, single-page developer portfolio designed with a modern glassmorphic UI. This project serves as a centralized hub to showcase engineering milestones, academic background, certified skill sets, and technical projects.

---

## 💫 Core Features

- 🎨 **Premium Glassmorphic UI:** A dark-themed, ultra-modern layout built using custom CSS styling, transitions, and native backdrop filters.
- 📱 **Fully Responsive Layout:** Optimized smoothly for dynamic viewport shifting across mobile devices, tablets, and wide desktop screens.
- 📬 **Embedded Formspree Integration:** A custom-built asynchronous contact form that serializes inputs safely as JSON string payloads and handles messaging without intrusive page redirects.
- 📜 **Dynamic Components:** JavaScript-driven layout components handling structural tasks like rendering interactive education timelines and self-managed scrolling certification grids.

---

## 🛠️ Tech Stack & Toolbox

- **Frontend Core:** HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid)
- **Engine Control:** Vanilla JavaScript (ES6+ Architecture, Namespace modularity)
- **Icons & Assets:** FontAwesome Icons, Google Fonts
- **Backend Communication:** Formspree API (Application/JSON Endpoints)

---

## 📁 Project Architecture & Layout

```text
├── index.html            # Main viewport structure & DOM node anchors
├── style.css             # Global stylesheets, animation frames, glassmorphic rules
├── script.js             # Core App engine controller & rendering namespaces
└── portfolio-data.js     # Centralized dictionary file containing profile data arrays
```
## 🚀 Setup & Deployment

### 1. Local Development
To run this project locally on your machine:
* Clone or download this repository.
* Open the directory and double-click `index.html` to launch it directly in any modern web browser.
* *(Optional)* Run via the **Live Server** extension inside VS Code for instant live-reload updates while tweaking styles.

### 2. Changing Formspree Routing Keys
To wire up the contact form to your own inbox:
* Create a free form endpoint at [Formspree.io](https://formspree.io/).
* Open `script.js`, locate the `handleDirectSubmit()` function, and replace the endpoint placeholder string with your unique form token hash:
  ```javascript
  const response = await fetch("[https://formspree.io/f/YOUR_UNIQUE_ID](https://formspree.io/f/YOUR_UNIQUE_ID)", { ... });

### 🔒 License
This repository is open-source and free to configure. Feel free to fork it, modify the internal array objects inside portfolio-data.js, and customize it to build out your own digital footprint!