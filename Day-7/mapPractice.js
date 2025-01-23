// const movieList = [
//     { title: "Movie 1", price: 200 },
//     { title: "Movie 2", price: 150 },
//     { title: "Movie 3", price: 300 }
// ];

// const formattedMovies = movieList.map(movie => {
//     return {
//         title: movie.title,
//         formattedPrice: `₹${movie.price +100}`
//     };
// });
// // console.log(formattedMovies);

// const showTimings = [
//     { time: "10:00 AM", seats: 50 },
//     { time: "2:00 PM", seats: 0 },
//     { time: "6:00 PM", seats: 25 }
// ];

// const availabilityStatus = showTimings.map( show => {
//     return {
//         time:show.time,
//         status:show.seats > 0 ? "Available":"unAvailable",
//         seatsleft: show.seats

//     };
// })
// console.log(availabilityStatus);


// 1. Create an array of 5 movie objects with: title, rating, price
// 2. Use map to create a "premium" price (original price + 100)
// 3. Use map to create movie recommendations based on rating

const listOfMovies = [
    {
        title:"King",
        rating:2,
        price :{
               normal:100,
               premium:200

        }
    },
    {
        title:"Bongu",
        rating:3,
        price :{
               normal:200,
               premium:100

        }
    },
    {
        title:"Mass",
        rating:4,
        price :{
               normal:10,
               premium:100

        }
    },
    {
        title:"kick",
        rating:5,
        price :{
               normal:70,
               premium:150

        }
    },
    {
        title:"Karma ra Babu",
        rating:1,
        price :{
               normal:30,
               premium:400

        }
    },
]
const addPremiumPrice = listOfMovies.map (movie =>{
    return {
        addPremiumPrice : movie.price.premium +100,
        recommendations: movie.rating > 2 ? "pleace go head this good movie":"not worth for your money "

    }
})
// console.log(addPremiumPrice);
// console.log(listOfMovies.keys);


