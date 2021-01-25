# Работа над ошибками
* исправлены все ошибки после первого ревью
* добавлена валидация формы изменения аватара

Вопрос?
Закрытие по Esc:
при редактировании формы (поле не пустое)
нажимаем Esc - все закрывается но не сбрасывается стейт
Необходимо поднимать стейт в App?

# Проект (11): Место REACT

* [ссылка на проект - еще не работает](http://pavel-khokhlov.github.io/mesto-react)

### Обзор
Проект собран на REACT
Страница с отображением профиля пользователя и карточек пользователей. Все данные лежат на сервере. Сделана функция API - запросы к серверу.
Созданы функции обновления профиля, аватара, добавление новых карт, функция like/dislike, удаление карт через форму подтверждения. Создана функция закрытия попап по клавише Esc.

### Технологии
В проекте были использовы HTML CSS, применены технологии адаптивной и резиновой верстки.
Организована работа с сервером через API. Использованы функции добавление удаления элементов страницы.
Добавлена валидация формы изменения аватара.

Преобразование кода:
* index.js - перемещен в папку pages

В папке: utils
* api.js - методы работы с сервером

Создана папка с функциональными компонентами:
* AddPlacePopup.js
* App.js
* Card.js
* ConfirmDeletePopup.js
* EditAvatarPopup.js
* EditProfilePopup.js
* Footer.js
* Header.js
* ImagePopup.js
* Main.js
* PopupWithForm.js
* PopupWithForm.js

Создана папка context:
* CurrentUserContext.js

Работает на большешстве устройств.
**Основные точки проверки при размерах экрана**
* 320px 
* 1280px

**Необходимо добавить**
* Валидацию форм: профиля и добавление новой карточки

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

