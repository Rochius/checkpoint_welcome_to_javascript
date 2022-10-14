const userName = "Rocío";//type: String

const userLastName = "Morales";//type: String

const userBirthDate ={
    day: 25,//type: number
    month: 'October',//type: string
    year: 1993//type: number
}//type: object

var userAge = 28;//type: number

var phoneNumber = "381-5631-1536"//type: string

var isSudent = true; //type: boolean

var isMarried = false;//type: boolean

var havePets = true;//type: boolean

var email = "rocio.mor.993@gmail.com"; //type: String

var favoriteMovies = [
    {
        movieName: 'Bridget Jones Diary',
        director: 'Sharon Maguire',
        year: 2001
    },
    {
        movieName: 'Pride and Prejudice',
        director: 'Joe Wright',
        year: 2005
    },
    {
        movieName: 'El Orfanato',
        director: 'Juan Antonio Bayona',
        year: 2007
    }
];//type: Array[String]

var favoriteTvShow = {
    showName: 'Veronica Mars',//type: string
    start: {
        day: 22,//type: number
        month: 'September',//type: string
        year: 2004//type: number
    },
    end:{
        day: 19,//type: number
        month: 'July',//type: string
        year: 2019//type: number
    },
    seasons:4,//type: number
    episodes: 72//type: number
}//type: Object


console.log(`My name is ${userName} ${userLastName} and I'm ${userAge} years old.`);
console.log(`Birth Date: ${userBirthDate.month} ${userBirthDate.day} of ${userBirthDate.year}`);
console.log(`Telephone number: ${phoneNumber}`);
console.log(`Have any pets?: ${havePets}`);
console.log(`Is married?: ${isMarried}`);
console.log(`Is student?: ${isSudent}`);
console.log("Favorite TV Show:");
console.log(`Show Name: ${favoriteTvShow.showName}; Start: ${favoriteTvShow.start.month} ${favoriteTvShow.start.year}; End: ${favoriteTvShow.end.month} ${favoriteTvShow.end.year}; Seasons: ${favoriteTvShow.seasons}; Episodes: ${favoriteTvShow.episodes}`)
console.log('Favorite movies:')
favoriteMovies.forEach(movie => {
    console.log(`Movie name: ${movie.movieName}; Director: ${movie.director}; Year: ${movie.year}.`);
})