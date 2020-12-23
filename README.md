# Работа над ошибками №1
1. Сделал общую функцию на закрытие попап
(Можно обосновать почему именно так нодо сделать)
2. Я не понимаю один момент, почему при закрытии ImagePopup у меня пропадает изображение и крестик уходит вверх из середины, хотя при закрытии других попап крестик уходит вместе с формой.

# Проект (10): Место REACT

* [ссылка на проект - еще не работает](http://pavel-khokhlov.github.io/mesto-react)

### Обзор
Сайт собран на REACT
Страница с отображением профиля пользователя и карточек пользователей. Все данные лежат на сервере. Сделана функция API - запросы к серверу.

### Технологии
В проекте были использовы HTML CSS, применены технологии адаптивной и резиновой верстки. Так же использован JavaScript для работы с Popup. Добавлены функции проверки форм.
Организована работа с сервером через API. Использованы функции добавление удаления элементов страницы.

Преобразование кода:
* index.js - перемещен в папку pages

В папке: utils
* api.js - методы работы с сервером

Создана папка с классами: components
* App.js
* Card.js
* Header.js
* Main.js
* Footer.js
* PopupWithForm.js
* ImagePopup.js

Работает на большешстве устройств.
**Основные точки проверки при размерах экрана**
* 320px 
* 1280px

**Необходимо добавить**
* Валидацию форм
* Организовать работу с сервером (редактировать профиль, изменить аватар, добавлять новые карточки, ставить/удалять свои лайки, показывать корзину на своих карточках, удалять свои карточки)
* Закрывать попап по нажатию ESC


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

