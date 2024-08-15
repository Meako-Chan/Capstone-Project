
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

## Ackowledgments
- Styling and Assets were made by adrianhajdin: https://github.com/adrianhajdin/banking
- Many components were made using ShadCN: https://ui.shadcn.com/
   
