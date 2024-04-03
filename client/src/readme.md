CLOTHES STORE

In this site you can sell and buy clothes for free! You can post your garment in our website and you can see what others have posted.
Table of Contents

    Introduction
    Features
    Installation
    Usage
    Configuration

Introduction

Clothes store ,,Favorite" is a web application that provides a platform for users to buy and sell second hand clothes effortlessly.
Features

    User Authentication: Allow users to create accounts, log in, and manage their posts securely.
    Data visualisation: Generate interactive charts and graphs to visualize data.

Installation

Clone the repository:

    https://github.com/e-m-a-n-u-e-ll-a/clothes-store

Navigate to the project directory :

cd ./server
 ```command prompt
 cd ./client
 

Install dependencies:

npm install

Start the application:

./server npm start ```command prompt ./client ng serve

    Open your browser:

    Visit http://localhost:4200 to view the application
    Usage

Posting a Garment

    Create an Account:
        Navigate to the registration page and create a new account.

    Log In:
        Go to the login page and log in with your credentials.

    Navigate to the Dashboard:
        Once logged in, visit the dashboard find your post to manage it.
        Edit your post
        Delete your post

    Add a New Garment:
        Click on the "Продай своя дреха" button to create a new  garment listing.
        Fill in the required details, such as the garment model, image URL, description, price, gender, and color.
        Click the "Submit" button to post your garment.

Interacting with Others

    Leave Comments:
        Engage with other users by leaving comments on their clothes listings.
        Share your thoughts, ask questions, or express interest in a particular garment.

Configuration

To configure and customize certain aspects of the project, follow the instructions below:
Environment Variables

    Database Configuration:
        DB_HOST: 'mongodb'.
        DB_PORT: '27017'.
        DB_NAME: 'clothes'.

    Authentication Secrets:
        Set the following environment variables to secure authentication:
            JWT_SECRET: 'mysupersecretSecret'.
