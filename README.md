
## Introduction
Built using the MERN stack along with Next.js & TailwindCSS, Aura is a banking platform able to connect to multiple bank accounts, displaying the transactions and permitting users to transfer money to others.

## Features
**Authentication**: Validations for signing up for an account and signing in with email and password creating a session token

**Home Page**: Displays general information about account balance and recent transactions

**Banks**: Display a lists of cards for corresponding banks

**Transaction History**: Provides a full-view of transaction history across all banks & accounts

**Fund Transfer**: Allows users to transfer money to other accounts

**Note: Transaction viewing, card display and fund transfer have not been implemented as of yet.**

## Installation
Ensure you have the following installed:
- Git
- Node.js
- npm

1. Clone the following Repository:
```bash
git clone https://github.com/Meako-Chan/Capstone-Project.git
cd banking-app
```
2. Install dependencies:
```bash
npm install
```
3. Create a new file name `.env` in the root of the project (banking-app) and add the following environment variables:
```env
#Connection String to MongoDB Atlas Database
MONGO_DB_URI=
#Secret for using NextAuth.js
AUTH_SECRET=
```
4.Run the App
```bash
npm run dev
```
Next, open http://localhost:3000 in your browser to view the project.

## Page Navigation
Upon opening the app, you may see the home page for a second, but then be immediately navigated to the sign-in page. From there, click on the blue text "sign-up" which will navigate you to the sign up page. You can then enter your information, and pressign the "Sign Up" button should navigate you to sign in using your email and password. Once validating your email and password, you will enter the home page in which you can navigate the different pages by using the navbar on the left.

## Ackowledgments
- Styling and Assets were made by adrianhajdin: https://github.com/adrianhajdin/banking
- Many components were made using ShadCN: https://ui.shadcn.com/
   
