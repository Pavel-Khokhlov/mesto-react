# Sprint #11 Mesto-REACT
This is one of the first Yandex-Praktikum study project

* [Link to the project](http://pavel-khokhlov.github.io/mesto-react)

***BIG UPDATE***
REDUX-TOOLKIT has been inmplemented in the project.
Create STORE with redusers and slices:
1. a1ppSlice.js - for common function
2. userSlice - for API concernig user requests 
3. dataSlice - for API conserning card requests
4. formSlice - for validate inpunts and forms
5. Created LOADER while content is loading 
### Review
CREATE REACT APPLICATOPN (CRA)
This is the Page with profile data and users pictures.
All data is located on the server.
There is an API function to connect with server and collect required information.
There are some function working through API requests:
1. Update profile data
2. Replace avatar
3. Add new places
4. Delete my places via confirmation popup
5. Like/Dislike

### Technologies Технологии
I have implemented HTML,CSS for creating adaptive site.
This site was created as a REACT aplication.
Added feature to close popup forms by ESC or click to overlay.
Created micro animation during opening and closing popup.
Created GLOBAL store for application by using REDUX-TOOLKIT

Working on most of devices with diferent view windows 
**Main point of design break**
* 320px 
* 1280px
