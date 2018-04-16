let mapimage;
let api_key = 'pk.eyJ1IjoidmllcnRoIiwiYSI6ImNqYW56ODZ5YTRzem8ycWxvN280M2NiZXcifQ.23YgACzRSHsPEXufzi3poQ';

let centerlongitude = 0;
let centerlatitude = 30;
let mapwidth = 1024;
let mapheight = 512;
let zoom = 1;

let earthquakedata;

let currenttime;
let endtime;

function preload() {
  mapimage = loadImage('https://api.mapbox.com/styles/v1/mapbox/light-v9/static/'+
            centerlongitude + "," +
            centerlatitude + "," +
            zoom + "/" +
            mapwidth + "x" +
            mapheight + '?access_token='+
            api_key);
