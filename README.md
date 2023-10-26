# Rick & Morty Wiki React App

This web application project is based on the [freecodecamp](https://www.freecodecamp.org/news/react-js-project-build-a-rick-and-morty-character-wiki/) tutorial with personal improvements.

The web application uses the API from rickandmortyapi to reference all characters from the famous animation TV Show: Rick & Morty.

![Alt text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHBjanh3bXdwaGtnejV0aGF4c3p6cGhucHViMGpmdWJkcnU4bzJibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MeM10mkoUXW8IRATAj/source.gif)

## Functionalities

### Main page

Once started, you can find on the application, the main page containing all characters from the TV Show, with the possibility to filter them by Species, Status or Gender, or even to search a character by its name

### Episodes

On the Episodes page you can find a selector to choose any episode from the serie, and access to the list of characters in the episode.


### Locations

As in the episodes page, you can select any location from the serie and see which characters live in it.

### Character details

By clicking on any character, you can access a few more details about her/him/it.


## Personal Ameliorations

As the project is from a tutorial, a big part of the code was already available online, which was a good point to learn React, but once I was more experienced with the library, I decided to bring some improvements to the project so that it can be a lot more personal.

- first of all, I migrated the whole project to TypeScript to make more documented, robust, etc.. (you know all the benefits of TypeScript)
- I added the library tanstack-query (or react-query) to handle all api calls and have a basic cache management
- I added a basic loading management to improve user experience
- I redefined a lot of basic code structure to improve readability, consistency and performance by for example replacing all the useless `let` declarations by `const`, by removing avoidable `useEffect` and `useState` causing unwanted rerendering and refactoring the code the separate helpers from the components and avoiding too big components by dividing in small ones.  


## Classic React Doc to start the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
