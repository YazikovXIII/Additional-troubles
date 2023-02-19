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

const login = ['one', 'two', 'three', 'four'];
const loginFind = 'three';

// let message = "";
// for (i = 0; i < login.length; i += 1) {
//     if (loginFind === login[i]) {
//         message = `Логин ${loginFind} найден`;
//         break;
//     }
        
//     message = `Логин не найден`;
    
// }
//     console.log(message);
let message = `Логин не найден`;
for (const some of login)
{
    if (some === loginFind)
        message = `Логин ${loginFind} найден`;
  
    }
console.log(message); 