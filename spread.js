function places_to_visit(...places) {
    console.log(places[0]);
    console.log(places[1]);
    console.log(places[2]);
}
var places = ["Saudi Arab", "Japan", "Bali"]
places_to_visit(...places);
console.log(...places)