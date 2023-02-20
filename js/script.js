// let number = 5;
// const leftBorderWidth = 1;

// alert('hello alert');

// const result = confirm('are you here');
// console.log(result);

// // const answer = prompt('vam yest 18?' , '18');
// console.log(typeof(answer))
// const answer = +prompt('vam yest 18?' , '18');
// console.log(answer + 5)

// const answers = [];

// answers[0] = prompt('kak vashe imya?', '');
// answers[1] = prompt('kak vashe familiya?', '');
// answers[2] = prompt('skolko vam let?', '');
// console.log(typeof(answers))
// console.log(typeof(null))


// // -----------------Интерполяция------------------------------------
// const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4');
// console.log(`https://someurl.com/${category}/5`); 

// const user = 'Ivan'
// alert(`Privetm ${user}`)


// // ----------------------- Операторы----------------------------------

// console.log('arr' + ' - object');
// console.log(4 + + ' - object');
// console.log(4 + + ' 4');

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

 
// console.log(incr++);
// console.log(decr--);


// console.log(2*4 == 8)

// console.log(5%2)


// && И
// || Или

// const isChecked = false,
//       isClose = false;

// console.log(isChecked && isClose)
// console.log(isChecked || !isClose);


// console.log(2 + 2 * 2 != 8);



// -------------------------------1 urok------------------------------------

const numberOfFilms = +prompt('Сколько филмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = promt('odin iz poslednih prosmotrennih filmov?', ''),
      b = prompt('na skolko ocenili ego', ''),
      c = promt('odin iz poslednih prosmotrennih filmov?', ''),
      d = prompt('na skolko ocenili ego', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB)