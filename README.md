# MealMission

## Introduction
Introducing MealMission, where we make it easy for anyone to turn surplus food into a chance to help others. Whether you're a student with extra meals, a business with leftovers, or an organization looking to distribute food, our platform connects you with those who need it most. By joining MealMission, you’re not just donating food; you’re helping to reduce waste and make a real difference in your community.

## Features
-User Authentication:Secure login and signup functionality, allowing users to create profiles, track donations, and update their information.
-Donation Form:Easy-to-use form for users to donate excess food, with options to upload images and provide details.
-Donation Feed:A real-time feed of available donations, where NGOs and charities can request items they need.
-Machine Learning-Based Food Quality Detection:To maintain food safety, MealMission integrates machine learning technology that automatically detects rotten or spoiled food items. Our AI model, built with TensorFlow and Keras, uses a Convolutional Neural Network (CNN) to automatically assess the quality of donated fruits and vegetables by classifying them as fresh or rotten based on uploaded images. It achieves 91% accuracy and is integrated into the platform using AWS SageMaker and an AWS Lambda function.
-Notification System and Status Tracking:When a user requests to receive a donation, the platform immediately sends a notification to the donor, ensuring they are aware of the request. The requesting user can then track the status of their request in real-time. They’ll see whether their request is accepted, rejected, or still pending, all within the platform.


## Deployment

### AWS Amplify

The MealMission website is deployed using **AWS Amplify**. You can access the live version of the website by clicking the link below:

### Live Website

[MealMission Live](https://main.d1m8fftx2hfbck.amplifyapp.com/)


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, make sure you have the following versions of the key dependencies installed:

- **React**: ^18.3.1
- **React Router DOM**: ^6.25.0
- **Swiper**: ^11.1.9

You'll also need **Node.js** and **npm** installed on your system. Make sure your Node.js version is compatible with these libraries (typically Node.js v16.x.x or higher).


### Installation

1.**open the terminal and choose where you want to store the project**
  cd path/to/your/directory
2. **Clone the repository**
   git clonehttps://github.com/Nour-Darwish/MealMission.git
3.**Navigate into the project directory**
  cd MealMission
4. **open VS code in the current directory**
   code .
5.**Install the necessary dependencies**
   npm install
6.**Start the development server**
    npm start

## Backend Repository

The backend for MealMission, including all Lambda functions, is available in a separate repository. You can access it using the link below:

[MealMission Backend Repository](https://github.com/Ruba-Zeineddine/Backend.git)

   
 
   
   
  


