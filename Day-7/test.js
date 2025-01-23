const movieDetails = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    price: {
        normal: 200,
        premium: 350
    },
    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
};

const timingsOfshow = movieDetails.showTimings.map((time,index)=>{
  return {time,index};
})
console.log(timingsOfshow);
console.log(movieDetails.price.premium);

