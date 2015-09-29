##Search User Kata App


####As a user of this application
- I want to be able to search for other users
- So that I can see their profiles


Online version [http://adhesive-smile.surge.sh/](http://adhesive-smile.surge.sh/)



####How to run the app

To start the app cd into the project folder and run

```
npm install
```

to install all the dependencies

and then run

```
gulp
```

to start a local server [http://localhost:4444](http://localhost:4444)


####Notes
- The users can be filtered using 3 fields (first name, last name and email)
- To simplify the development the data source is a static json file (users.json).
- All the assets are not minified to improve the review process. In a production environment all the resources should be minified and gzipped.
- I'm not using any CSS framework to simplify the code.
- In a second iteration would be nice to improve the error reporting system (AJAX call failure) with a dedicated layout on the map aWnd would be also nice to show a message to the user when no results are found.
