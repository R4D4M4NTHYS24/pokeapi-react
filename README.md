## Introduction

This web application demonstrates my skills in developing solutions with a Lean agile methodology approach. It uses React+hooks for the implementation of the user interface, styled components for the application's style, api-rest for communication with backend services, PWA for a faster and uninterrupted user experience, jest for unit testing, SPA for smooth navigation, git for version control, and Github as a storage and collaboration platform. The application is deployed on the Netlify server.

## Technical Requirements

This web application is compatible with the Windows, MacOS, and Linux operating systems. It is recommended to use the latest versions of Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari for an optimal experience. Git must be installed on the local machine and a Github account is necessary to access version control and collaboration functionality. The application was developed using React version 16.13.1 and uses the following libraries: styled components version 5.2.0, PWA version 0.21.4, and jest version 26.4.2. It is recommended to use the same or higher versions to avoid possible compatibility issues.

## Instructions

To install the "pokeapi-react" project, follow these steps:
1. Clone or download the project from its Github repository.
2. Open a terminal window in the project directory.
3. Run the command `npm install` to install all the required dependencies listed in the package.json file.
4. Once the installation is complete, run the command `npm start` to start the development server.
5. Open your web browser and go to http://localhost:3000 to access the application.

The project is built using React version 18.2.0 and other dependencies such as styled-components version 5.3.6, jest version 26.4.2, and workbox version 6.5.4. It is recommended to use the same or higher versions to avoid possible compatibility issues. The "scripts" section of the package.json file lists the available scripts that can be run using npm, including start, build, test, and eject. The "browserslist" section lists the supported production and development browsers. The project also includes devDependencies for development and testing purposes.

## Use

This application is used both to see a complete list of pokemons, and to search by name for a specific pokemon, its purpose is for didactic-demonstrative purposes to publicize my skills at the front-end development level. To use it, simply go to the search box, type the name of a pokemon and by means of the function `onSearchChange()` present in the App.js, each character typed through the keyboard will be detected, then by means of the function `newFilteredPokemons()` a process of filtering to the pokemons array that contains the response from the pokemon api, purely generating a new array with the pokemons that match the characters entered by the user. It should be noted that the aforementioned functions operate under the functional paradigm through the useEffect and useState hooks present in React.

## Configuration Guide

To use the application, follow these steps:
1. Open your web browser and navigate to the application.
2. In the search bar, type the name of the Pokémon you wish to view.
3. As you type, the cards of Pokémon that match your input will automatically be filtered and displayed.
4. To delete your search, you can either use the backspace key or click on the X icon in the search box.
5. The application also allows you to scroll through all the Pokémon.
Note: The application includes all 151 Pokémon from the first season of the Pokémon series.

## Common issues and solutions
Troubleshooting: Common Issues and Solutions
1.	Connection Problems: If you are unable to connect to the internet, make sure your device is connected to a reliable network and that the network's settings allow for proper web browsing. If the issue persists, restart your device or contact your network provider.
2.	Browser Configuration: The application may not work properly with certain browsers, so it is recommended to use the latest version of Google Chrome, Mozilla Firefox, or Apple Safari. If you are still encountering issues, try clearing your browser's cache and cookies.
3.	Slow Loading Speed: If the application is taking a long time to load, try closing other tabs and applications to free up system resources. Also, ensure that your device has sufficient storage space and that you have the latest updates installed.
4.	Display Issues: If the graphics or text in the application are not appearing correctly, try adjusting the screen resolution and refresh rate on your device. If the issue persists, try using a different device or browser.
5.	Search Functionality: If you are unable to find a specific Pokemon using the search function, make sure that you are typing the name correctly. If you are still having trouble, try restarting the application or clearing your browser's cache and cookies.
If you encounter any other issues, please feel free to contact our support team for further assistance.

## References 

The pokeapi-react package is a React project that depends on the following npm packages:
react and react-dom at version 18.2.0: npm install react@18.2.0 react-dom@18.2.0 styled-components at version 5.3.6: npm install styled-components@5.3.6 @testing-library/jest-dom at version 5.16.5: npm install @testing-library/jest-dom@5.16.5 @testing-library/user-event at version 13.5.0: npm install @testing-library/user-event@13.5.0 In addition, it makes use of several workbox packages:
workbox-background-sync workbox-broadcast-update workbox-cacheable-response workbox-core workbox-expiration workbox-google-analytics workbox-navigation-preload workbox-precaching workbox-range-requests workbox-routing workbox-strategies To install all the workbox packages, run the following command: npm install workbox-background-sync workbox-broadcast-update workbox-cacheable-response workbox-core workbox-expiration workbox-google-analytics workbox-navigation-preload workbox-precaching workbox-range-requests workbox-routing workbox-strategies
The project also includes command scripts for starting, building, running tests with Jest and ejecting. It has an eslint configuration that extends the react-app and react-app/jest rules. The package is compatible with browsers with a market share greater than 0.2% that are not obsolete in production, and with the latest versions of Chrome, Firefox, and Safari in development.
As development dependencies, they are:
@babel/core @babel/preset-env @babel/preset-react @testing-library/react babel-jest babel-plugin-transform-es2015-modules-commonjs To install these development dependencies, run the following command: npm install @babel/core @babel/preset-env @babel/preset-react @testing-library/react babel-jest babel-plugin-transform-es2015-modules-commonjs
These packages help improve and optimize the development and testing of the project.
