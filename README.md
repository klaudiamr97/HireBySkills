This project is a job search platform, HireBySkills, which allows users to search for job opportunities using built-in filters. 
The aim of this project is to support young adults entering the job market by helping them avoid the experience paradox and skills mismatch. 
Users can filter job listings by selected skills, enabling the system to offer personalized job offers.

Main features of HireBySkills
- User authentication
- Job listing creation and management
- Job application
- Responsive design

Installation process
- Clone repository:
  git clone https://github.com/klaudiamr97/HireBySkills.git
- Navigate to the frontend and backend of the project:
  cd HireBySkills/backend
  cd HireBySkills/frontend
- Install dependencies in both directories:
npm install
- Start the development server in both directories
npm run dev

Backend configuration
1. Environment Files: Navigate to the backend folder and create .env file. Add the following contents to both files

MONGODB_CONNECTION_STRING=

JWT_SECRET_KEY=
FRONTEND_URL=

# Cloudinary Variables
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

MongoDB Setup:

Sign up for an account at MongoDB Atlas.
Create a new cluster and follow the instructions to set up a new database.
Once set up, obtain your MongoDB connection string and add it to the MONGODB_CONNECTION_STRING variable in your .env files.

Cloudinary Setup:

Create an account at Cloudinary.
Navigate to your dashboard to find your cloud name, API key, and API secret.
Add these details to the respective CLOUDINARY_* variables in your .env files.

JWT_SECRET_KEY:

This just needs to be any long, random string. You can google "secret key generator".
Frontend URL:

The FRONTEND_URL should point to the URL where your frontend application is running.

Environment Files: Navigate to the frontend folder and create a file: .env:

VITE_API_BASE_URL=
VITE_STRIPE_PUB_KEY=
VITE_API_BASE_URLL:

The VITE_API_BASE_URL should point to the URL where your backend application is running (typically http://localhost:7000 if you're running it locally).

Usage

You can use this website from two perspectives: Job seeker and employer. 

Employeer

- Register or log in.
- Navigate to Account.
- Use the 'Add job listing' button to create a new job listing.
- Fill out job listing details. Remember to choose Essential and Optional skills from the drop-down lists. This will allow job seekers to find your job offer.
- Once submitted, your job listing will be visible in your Account, where you can modify it.
- You will also be able to see applications submitted for your job offer.

Job seeker

- Register or log in.
- Navigate to Jobs and filter them using your selected skills.
- Apply to job offers.
- Once the application has been submitted, you will be able to see the log of your applications in your Account.

Created by Klaudia Mrozek
