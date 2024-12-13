# Library Application

This is a React Native library management application that allows users to manage books and their details. The application includes an admin login feature and supports managing books. Firebase is used as the backend service for managing data. This README provides instructions on how to set up and run the application locally.

## Features

- **Admin Login**: Use the following credentials for admin access:
  - Username: `admin`
  - Password: `admin123`

- **User Roles**:
  - Admin: Can add, edit, and delete books.
  - User: Can view books but cannot add, edit, or delete them.

- **Book Management**:
  - Add, edit, and delete books (admin only).
  - Sorting functionality for books by name, ISBN, and author will be added in future updates.

- **Firebase Integration**:
  - Real-time database for storing and retrieving book data.
  - Secure authentication for admin and user access.

- **React Native and Expo**:
  - Developed with React Native for cross-platform compatibility.
  - Uses Expo for easy setup and testing.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Testing](#testing)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd library
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or, if using yarn:

   ```bash
   yarn install
   ```

## Running the Application

1. Start the Expo server:

   ```bash
   npx expo start
   ```

2. Open the Expo Go app on your phone or an emulator and scan the QR code displayed in the terminal or browser.

## Testing

This project uses Jest and React Native Testing Library for unit testing.

### Running Tests

1. To run tests, execute the following command:

   ```bash
   npm test
   ```

   or, if using yarn:

   ```bash
   yarn test
   ```

2. Test files are located in the `src/__tests__` directory.


