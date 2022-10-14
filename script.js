const userName = "Rocío";//type: String
const userLastName = "Morales";//type: String
const userBirthDate ={
    day: 25,//type: number
    month: 'October',//type: string
    year: 1993//type: number
}//type: object
var userAge = 28;//type: number
const dni = "37497949";//type: string
var phoneNumber = "381-5631-1536"//type: string
var isMarried = false;//type: boolean
var havePets = true;//type: boolean
var address = "Calle Walabi 42 Sidney"; //type: String
var favoriteMovies = ['El diario de Bridget Jones', 'Orgullo y Prejuicio', "El Orfanato"];//type: Array[String]
var favoriteTvShow = {
    showName: 'Sailor Moon',//type: string
    start: {
        day: 27,//type: number
        month: 'March',//type: string
        year: 1992//type: number
    },
    end:{
        day: 8,//type: number
        month: 'February',//type: string
        year: 1997//type: number
    },
    seasons:5,//type: number
    episodes: 200//type: number
}//type: Object


console.log(`My name is ${userName} ${userLastName} and I have ${userAge} years old.`);
console.log(`Birth Date: ${userBirthDate.month} ${userBirthDate.day} of ${userBirthDate.year}`);
