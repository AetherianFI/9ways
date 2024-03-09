# 9ways

## Built With
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Installation
1. Install Node.js from the [official website](https://nodejs.org/en)
2. Clone the repository on your local machine and open with Visual Studio Code for example.
3. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to your Visual Studio Code from the extensions tab (Ctrl + Shift + X).
4. Install express.js and cors:
   
```
$ npm install express
```
```
$ npm install cors
```
5. Run ```express/index.js``` by switching to express folder with ```cd express``` and then using ```node .``` or ```node index.js```.
6. Start your localhost server by clicking "Go Live" from the bottom right corner.
Window should open automatically or if it doesn't then navigate to [http://127.0.0.1:5500/html/map.html](http://127.0.0.1:5500/html/map.html).

## Usage
You can login to website with already existing accounts or make a new one for yourself. 
Existing accounts can be found from the accounts.json.
Creating account happens on register.html page and submitted form data is then sent to express.js server (express/index.js) that receives the data and saves it into accounts.json.

## Acknowledgments
All icons used on the website are from [Boxicons](https://boxicons.com/) ([see license](https://boxicons.com/usage#license)).

### Project uses following LeafletJS plugins:
[leaflet-control-geocoder](https://github.com/perliedman/leaflet-control-geocoder) ([see license](https://github.com/perliedman/leaflet-control-geocoder/blob/master/LICENSE)).

[Leaflet.MousePosition](https://github.com/ardhi/Leaflet.MousePosition) ([see license](https://github.com/ardhi/Leaflet.MousePosition/blob/master/MIT-LICENCE.txt)).

[leaflet-routing-machine](https://github.com/perliedman/leaflet-routing-machine?tab=License-1-ov-file) ([see license](https://github.com/perliedman/leaflet-routing-machine/blob/master/LICENSE.md)).

## For getting started with LeafletJS:
https://leafletjs.com/reference.html
