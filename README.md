# _Type Racer_

#### _A type racing web application using Angular, and Firebase Realtime Database_


By Kenny Wolfenberger, James Cho, Gulzat Karimova, and Manasa Vesala_

## Description

_This is an online typing competition, TypeRacer, allows people to race against the computer by typing various quotes from books, movies, and songs._

## Type Racer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Specs
| Spec 
| :-------------    
| Program will take user input name and difficulty to initialize a new game.
| Program will start game once the user clicks on the Start Game button.
| Program will fetch a random paragraph from the database for the user to type.
| Program will prompt the user to start typing once the light turns green.
| Program will highlight the active word that the user is typing. 
| Program will move to the next word if user input is correct, or increment the error count if the input is incorrect.
| Program will assign a different image for CPU according to difficulty and will move towards the finish line according to their assigned speeds.
| Program will display a modal with the results once the player finishes typing the paragraph.
| Program will push user info and score to the database where it can be accessed in the About Us section.



## Setup/Installation Requirements

- Webpage is deployed on Firebase -> https://typeracer-50606.firebaseapp.com/
- Clone this repository https://github.com/kwolfenb/typing-game-angular.git
- Install Node.js
- Open Mac Terminal or Windows Command Prompt.
- Install Typescript through this command: "npm install -g typescript".
- Install Angular CLI through this command: "npm install -g @angular/cli".
- Type "cd typing-game-angular" and press enter to go to the main directory.
- Type "npm install" and press enter to install plugins and dependencies.
- Go to https://firebase.google.com/ and log in or create an account.
- Create a firebase project.
- Click on the circular gear icon next to the 'Project Overview' in the project you just created in Firebase.
  * Under the general tab, click on "Add Firebase to your web app:.
  * Copy everything inside the curly brackets of 'var config = { ... }.
- Create a file in the app folder called 'api-keys.ts'.
  * Inside the api-keys.ts file, type in 'export const masterFirebaseConfig = {}'
  * Inside the curly braces, paste what you copied earlier from Firebase.
- Click on 'Database' on the left side of Firebase console under your project and create a database. 
  * Next to the 'Database' header click on the dropdown menu and click on 'Realtime Database'.
  * Click on the icon that looks like three vertical dots under the 'Data' tab and click on 'Import JSON'.
  * Import the 'sample-exclusive-booklist.json' file inside this repo in the root folder."
  * Click on the 'Rules' tab of the database. 
  * Under rules, change the 'false' of '.read' to true.
- Type in "ng serve -o" to start the app in your Chrome browswer.

## Support and contact details

* _Manasa Vesala - vesalamanasa@gmail.com_
* _Gulzat Karimova -  gulzat.karimova@gmail.com_
* _James Cho - hwisoocho@gmail.com_
* _Kenny Wolfenberger -  kennywolfenberger@gmail.com_


## Technologies Used

* _TypeScript_
* _node.js_
* _npm_
* _Angular 5_
* _VS Code_
* _Git_
* _GitHub_
* _HTML_
* _CSS_
* _JQuery_
* _Firebase Realtime Database_
* _Firebase Authentication_


## License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Manasa Vesala, Gulzat Karimova, James Cho, Kenny Wolfenberger_**
