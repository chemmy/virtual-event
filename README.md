### `SETTING UP`

- Clone repository or download zip
- Run the following scripts:
  - npm i
  - npm run start

### `APP`

The app consists of the following pages:

- A welcome page showing text and image content
- A profile page where the user details are shown
  - User may upload image and manipulate the image via crop and rotate functions
  - User may also set the visibility

Notes about the state management:

- State will not be cleared as long as the links are used to navigate between pages
- Refreshing will cause the state to be reset

### `ADDITIONAL LIBRARIES`

- Used `angular-svg-icon` to render svgs
- Used `ngrx` for state management

### `IMPROVEMENTS`

- Use localstorage to store access token
- Error handling when 401 is returned by upload-test endpoint, call login to get accesstoken
- Smooth transitions

### `Possible ways to fix npm install issues`

- Update versions of node/npm
- Install @angular/cli
-
