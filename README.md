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
### Method 1
1. Install Node.js from the [official website](https://nodejs.org/en)
2. Clone the repository on your local machine and open with Visual Studio Code for example.
3. Install dependencies express.js and cors with following commands:

```
$ npm install express
```

```
$ npm install cors
```

4. Run `index.js` file and navigate to [http://127.0.0.1:3000/html/map.html](http://127.0.0.1:3000/html/map.html)
   
### Method 2
1. Run 9ways.exe and navigate to [http://127.0.0.1:3000/html/map.html](http://127.0.0.1:3000/html/map.html)

## Usage

You can login to website with already existing accounts or make a new one for yourself.
Existing accounts can be found from the accounts.json.
Creating account happens on register.html page and submitted form data is then sent to express.js server (express/index.js) that receives the data and saves it into accounts.json.

## Acknowledgments

The icons used on the website are sourced from [Boxicons](https://boxicons.com/) ([see license](https://boxicons.com/usage#license)) and [Icons8](https://icons8.com/) ([see license](https://icons8.com/license)).

### Project uses following LeafletJS plugins:

[leaflet-control-geocoder](https://github.com/perliedman/leaflet-control-geocoder) ([see license](https://github.com/perliedman/leaflet-control-geocoder/blob/master/LICENSE)).

[Leaflet.MousePosition](https://github.com/ardhi/Leaflet.MousePosition) ([see license](https://github.com/ardhi/Leaflet.MousePosition/blob/master/MIT-LICENCE.txt)).

[leaflet-routing-machine](https://github.com/perliedman/leaflet-routing-machine?tab=License-1-ov-file) ([see license](https://github.com/perliedman/leaflet-routing-machine/blob/master/LICENSE.md)).

[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) ([see license](https://github.com/Leaflet/Leaflet.markercluster/blob/master/MIT-LICENCE.txt))

## For getting started with LeafletJS:

https://leafletjs.com/reference.html

## Known problems

When accessing the page with Firefox browser there are problems with downloading the css files so using Chrome is recommended
