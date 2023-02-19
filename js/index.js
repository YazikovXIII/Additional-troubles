// const arr1 = [1, 3, 6, 8, 11, 14, 19]
// const arr2 = [2, 3, 5, 8, 9, 12, 14, 17]

// Напиши скрипт который считает сумму 3 массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const array3 = [5, 25, 657, 7686];

// const newArray = array1.concat(array2, array3);
// let total = 0;
// for (let i = 0; i < newArray.length; i += 1) {
//   total += newArray[i];
// }

// console.log(total);

// Напиши скрипт пошуку логіна.
// Якщо логін є вивести повідомлення "Логін знайдений"
// Якщо логіна немає повідомлення "Логін не знайдений"

// const login = ['one', 'two', 'three', 'four'];
// const loginFind = 'three';

// let message = "";
// for (i = 0; i < login.length; i += 1) {
//     if (loginFind === login[i]) {
//         message = `Логин ${loginFind} найден`;
//         break;
//     }

//     message = `Логин не найден`;

// }
//     console.log(message);
// let message = `Логин не найден`;
// for (const some of login)
// {
//     if (some === loginFind)
//         message = `Логин ${loginFind} найден`;

//     }
// console.log(message);

// Напишите регистр  который заменяет регистр каждого в строке на противоположный
// Например если строка = `Javascript` то  на  выходе должен быть`jAVAsCRIPT`

// const string = "JavaScript";
// const array1 = string.split("");
// // console.log(array1);
// for (i = 0; i < array1.length; i += 1) {
//   if (array1[i] === array1[i].toLowerCase) {
//     array1[i] = array1[i].toUpperCase;
//   }
//   console.log(array1);
// }
// const string = `Javascript`;
// const newString = string.toUpperCase();
// console.log(newString);
// let letters = string.split(``);
// let newString = ``;
// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
// if (letter === letter.toLowerCase()) {
//     console.log(`Эта строка находится в нижнем регистре!!! - `, letter);
//       newString += letter.toUpperCase();
// } else {
//     console.log(`Эта  строка находится в верхнем регистре - `, letter);
//    newString += letter.toLowerCase();

// }
//     newString += letter === letter.toLowerCase() ?
//         letter.toUpperCase() : letter.toLowerCase();
// }

// принять масив к нижнему регистру
// разделить пробелом
// сшить с помощью тире

// const title = `Top 10 benefits of React framework`;
// const arrey = title.toLowerCase().split(" ").join("-");

// console.log(arrey);

/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами не меняя массив
 */
//  js is foo the best
// const arr = ["BEST", "the", "foo", "is", "JS"];
// const arr2 = arr.reverse();
// console.log(arr2);
// const arr3 = arr2.slice(3, 4);

// console.log(arr3);

// console.log(arr.slice(0, 2).concat(arr.slice(-2)).reverse().join(" "));

// Щас будет универсальный вар1
// function arrReverseDel(arr, del) {
//   const newArr = [];
//   for (let i = arr.length; i >= 0; i -= 1) {
//     if (arr[i] !== del) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(arrReverseDel(["BEST", "the", "foo", "is", "JS"], "foo"));
// 17:12
// Вар2
// function arrReverseDel(arr, del) {
//   const newArr = [];
//   for (let i = arr.length; i >= 0; i -= 1) {
//     if (arr[i] === del) {
//       continue;
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// console.log(arrReverseDel(["BEST", "the", "foo", "is", "JS"], "foo"));
// 17:14
// Вар3
// function arrReverseDel(arr, del) {
//   const newArr = arr.slice(0).reverse();
//   for (const item of newArr) {
//     if (item.includes(del)) {
//       newArr.splice(newArr.indexOf(del), 1);
//     }
//   }
//   return newArr;
// }
// console.log(arrReverseDel(["BEST", "the", "foo", "is", "JS"], "foo"));


const arr1 = [1, 3, 6, 8, 11, 14, 19]
const arr2 = [2, 3, 5, 8, 9, 12, 14, 17]
let arrResult = [];

for (let i = 0; i < arr1.length; i++)
{
    if (arr2.includes(arr1[i])) {
        arrResult.push(arr1[i]);

}

    }
console.log(arrResult);