# a99 Final Project

## Team Petra 

Our team created a website featuring a COVID-19 dashboard and pandemic resources, with user signup and login functionality. We used Next.js,  Firebase, and the CovidActNow api to build this website.


## Team mangement


Basic roles:

- Review manager, Project Manager, Back-end lead - Andrew 
- Plan manager, Design lead, front-end support - Matthew
- Documentation manager front-end support - Ashwin 
- Release manager, Front-end lead - Sofia
- Database lead - Winfield



## Instructions for setup and running

Install Node.js, Git, and VS Code (or another code editor) if you don’t have them already.

Clone the repository from GitHub:

`git clone https://github.com/comp426-2022-spring/a99-petra.git`

Go into the repository in your terminal:

`cd a99-petra`

Create file `.env.local` in the root project directory. Copy and paste the seven lines below
 
`NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyAJ30sAY9uako9hEWUQ8MRhGEA_RunxlYU"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="comp426petra.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="comp426petra"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="comp426petra.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="52760834417"
NEXT_PUBLIC_FIREBASE_APP_ID="1:52760834417:web:df85d59191cd59ac1a06d0"
NEXT_PUBLIC_COVID_KEY="a20ae47ef015408baf810eefe7d29418"`

### make sure to hit save (cntr/cmmd + S) at this point to avoid firebase issues/errors

Install the necessary packages needed to run the app:

`npm install`

To run the app (ex. In VScode terminal):

run `npm run dev`

In your browser, navigate to:  `localhost:3000`

End the session with Ctrl+c



## Required Packages and dependency list

When you run `npm install` inside the package root directory, this will install all required dependencies. These can be found in `package.json`.

Some packages are listed below-
axios:^0.26.1 firebase:^9.6.11 next:12.1.1 react:17.0.2 react-dom:17.0.2 react-icons:4.3.1 recharts:2.1.9

### make sure the dependencies, especially firebase are the version listed.












