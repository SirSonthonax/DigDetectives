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

  function setup() {
  createCanvas(mapwidth, mapheight);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimage,0,0);
  currenttime =  earthquakedata.features[earthquakedata.features.length - 1].properties.time
  endtime = earthquakedata.features[0].properties.time
  for (i = 0; i<earthquakedata.features.length; i++){
    data = earthquakedata.features[i];
    let long = data.geometry.coordinates[0];
    let lat = data.geometry.coordinates[1];
    let x = mercX(long) - mercX(centerlongitude);
    let y = mercY(lat) - mercY(centerlatitude);
    
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }
    earthquakedata.features[i].geometry.x = x
    earthquakedata.features[i].geometry.y = y
  }
}

function draw() {
  
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimage,0,0);
