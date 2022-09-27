## React App with Google OAuth

### **Objectives**

| Objective |  Implementation    |  Status |
|:----------|:-------------|:--------: |
| Front End |  Simple React App  | [x] |
|           |  Google OAuth   |  [x]  |
|           |  React Router   |  [x]  | 
|           |  React Context  |  [x]  |
| Backend   | Express         |  [x]  |
|           | PassportJS      |  [x]  |
|           | Google OAuth    |  [x]  |
|           | Database        |  [-]  |

[x] = done ; [-]= not yet

### **Description**

##### Available Endpoints

|    Endpoint      |  Description | Protected | Auth Strategy |
| :--------------  | :------------------- |:----------:|:--: |
|   /         |  redirect ro login    | no  | - |
|  /login      |  login Page           | no  | - |
|  /home            |  home Page    | yes  | Google OAuth2 |
|  /about   |  about page   | no  | - |

##### Website Navigation Flowchart

<img src="https://res.cloudinary.com/revynovian/image/upload/v1653609599/refactory-test/flowchart_e7otge.png" alt="flow" border="0" />

### **Preview**

#### Login Page

<img src="https://res.cloudinary.com/revynovian/image/upload/v1653609602/refactory-test/login_stcyts.png" alt="login-1" border="0" />

#### Login Page (Dark)

<img src="https://res.cloudinary.com/revynovian/image/upload/v1653609602/refactory-test/login_dark_zqsduj.png" alt="login-dark" border="0" />

#### Google SSO 

<img src="https://res.cloudinary.com/revynovian/image/upload/v1653609600/refactory-test/singingoogle_cevdiu.png" alt="googlesignin" border="0" width="40%" height="40%"  />

#### Home Page

<img src="https://res.cloudinary.com/revynovian/image/upload/v1653609602/refactory-test/home_zqjfxa.png" alt="home" border="0" />


---
**How to Setup the Project**

A. Back End

install dependencies

```bash
npm install
```

and run the development server (install nodemon first to monitor changes/updates in your code):

```bash
npm run start
# or
yarn start
```

The server will be running at http://localhost:5000/

B. Front End

This project created using CRA (create-react-app)

install dependencies

```bash
npm install
```

```bash
npm run start
# or
yarn start
```

The app will be acessible in your browser at http://localhost:3000/