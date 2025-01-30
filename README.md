# User-Management-Dashboard
**Link** : ```bash
       https://user-management-dashboard-6q7a.vercel.app.
      ```

A simple user management system built with React for the frontend and integrated with a backend API for managing user data. This project allows users to add, edit, and delete user information.

## 🚀 Features

- **Add a New User**: Create a new user by providing a name and email.
- **Edit User Information**: Modify existing user details.
- **Delete User**: Remove users from the list.
- **User List**: View all users in a list format.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.

## 🛠 Tech Stack

- **Frontend**: React, CSS
- **API**: JSONPlaceholder (for mock backend interaction)
- **HTTP Requests**: Axios for making API calls
- **Deployment**: Vercel (for hosting the application)

---

## 📌 Setup Instructions

### **Prerequisites**
Before you start, make sure you have the following installed:

- **Node.js**: [Download and install](https://nodejs.org/)
- **Git**: [Download and install](https://git-scm.com/)
- **A Code Editor**: Recommended - [Visual Studio Code](https://code.visualstudio.com/)

---

### **Steps to Run Locally**

#### **Clone the repository**
Open your terminal and run the following command:

```bash
git clone https://github.com/yourusername/your-repository-name.git
```
2. **Install Dependencies**
   ```bash
   cd your-repository-name
   ```
3. **Run the following command**
   ```bash
   npm install
   ```
4. **Start Development Server**
   ```bash
   npm start
   ```
This will open the application in your default browser, typically at http://localhost:3000.

## 📂 Project Structure

```
my-project/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── UserForm.js
│   │   └── UserList.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## 🔗 API Integration  
The app uses the following API endpoints from JSONPlaceholder:  

- **GET** `/users` → Fetch the list of all users.  
- **POST** `/users` → Add a new user (simulated response).  
- **PUT** `/users/:id` → Edit an existing user.  
- **DELETE** `/users/:id` → Delete a user.  


## 🚀 Deployment on Vercel
Here is the step-by-step guide to deploy your application on Vercel:

1. Create a Vercel account:
2. Link your GitHub repository:
3. On the Vercel dashboard, click on "New Project".
4. Select your GitHub repository for the project.
5. Follow the prompts to import your repository into Vercel.
6. Configure the Project:
7. Choose the project name and settings. Vercel will auto-detect your project setup.
Make sure to set up the correct build settings if prompted (usually, npm run build is the default for React apps).
8. Deploy: After configuring the project, click "Deploy".Vercel will automatically build and deploy your app.
9. Access the live app:Once the deployment is complete, Vercel will provide you with a unique URL
    - In my project
      ```bash
       https://user-management-dashboard-6q7a.vercel.app.
      ```
### 📈 Future Improvements
- Implement real backend interaction instead of using the mock API (e.g., use a database and server like Express.js or Node.js).
- Add more advanced validation for the user input form.
- Implement pagination for large lists of users.
