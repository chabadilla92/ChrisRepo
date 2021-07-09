// Select the main tag since we will inject our movies there
const $main = $("main")

// Asynchronous Request for the data in our JSON file
// . in .json means, the current folder were in 
$.ajax("./json/data.json")
// When the data arrives, do stuff 
.then((data) => {
    // Loop over the array of movies
    data.forEach((movie, index) => {
    //create a new div for each movie
    const $div = $("<div>")

    // edit the html of the div 
    $div.html(`<h2 class="movie-title">${movie.title}</h2>
    <h3 class="movie-release">${movie.release_year}</h3>
    <img src='${movie.image}'/>`)

    // append the div to the main tag
    $main.append($div)
    })
})
.catch((error) => console.log(error))