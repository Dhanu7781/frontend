

let movieName = "Game Changer";

let rating = 4.5 ;

let isBlockbuster = true

console.log(typeof movieName , typeof rating , typeof isBlockbuster);


let obj = {
      moviesName:"sankarthriki vasthunam",
      movieRating:4.5,
      acoter :["venky mawa , sandeep Reddy vanga , Dj"],
      is3D:false
}
console.log(obj);



// Create Arrays 

let arr = [1,2,3,4,5,6]

let numOfSeats = new Array(101,1010,1001)

let numOfPlayers = Array.from("ejfcheyiu1")

console.log(numOfPlayers);



let movie = {

    name:"PvR",
    nameOfMovie: "Blast",
    direcoter: "Nenney ayyithe enti",
    screens:["screen1","screen2"],
    facilities: ["AC", "Dolby Atmos"],
    showCount: 5


};
// console.log(movie.screens.forEach(value =>{
//     return value
// }));
const values = movie.screens.map( value =>{
    return value.screens;
    // console.log(value);
    
    
}) 
console.log(values);



