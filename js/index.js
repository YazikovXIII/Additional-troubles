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


// const arr1 = [1, 3, 6, 8, 11, 14, 19]
// const arr2 = [2, 3, 5, 8, 9, 12, 14, 17]
// let arrResult = [];

// for (let i = 0; i < arr1.length; i++)
// {
//     if (arr2.includes(arr1[i])) {
//         arrResult.push(arr1[i]);

// }

//     }
// console.log(arrResult);

// const arrJs = ['BEST', 'the', 'foo', 'is', 'JS'];
// console.log(arrJs.slice(0, 2).concat(arrJs.slice(-2)).reverse().join(" "))



// Change code below this line

// 12
// function countProps(object) {
//   let propCount = 0;
  

//   for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   return propCount;
//   }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//    values.push(apartment[key])
//   console.log(key);
//   console.log(apartment[key])
// }

// 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object)
//   console.log(keys);
//   for (const key of keys) {
//     propCount += 1
//     }
  

//   return propCount;
//   // Change code above this line
// }
// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const name = Object.keys(salaries)
//   const salary = Object.values(salaries)
//   for(const key of salary) {
//     totalSalary += key
//   }

//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({})
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const hexs of colors) {
//   hexColors.push(hexs.hex)
//   rgbColors.push(hexs.rgb)
//   console.log(hexColors)
//   console.log(rgbColors)
// }

// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const key of products) {
//     console.log(productName)
//     if (key.name === productName) {
//       return key.price;
// }
//   }
//   return null;
// }
// getProductPrice("Radar")
// getProductPrice("Grip")
// getProductPrice("Scanner")
// getProductPrice("Droid")
// getProductPrice("Engine")

// 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const array = [];
//   for (const key of products) {
//     if (key.hasOwnProperty(propName)) {
//       array.push(key[propName])
//     }
    
    
//   }
//   return array;


//   // Change code above this line
// }
// console.log(getAllPropValues("name"))
// getAllPropValues("name")
// getAllPropValues("quantity")
// getAllPropValues("price")
// getAllPropValues("category")


// 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for(const key of products) {
//       if(Object.values(key).includes(productName)) {
//         return key.price * key.quantity
//       }
//     }
// return 0


 
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };


// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
//   } = forecast

// 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// 29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
//   const newObject = { ...{ category, priority, completed }, ...data };
//   console.log(newObject)


//   return newObject;
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение.
//               Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное -
//               функция возвращает это нечётное число.




// function add(...args) {
//     let result = 0;
//     for (const item of args) {
//        result += item
//     }
//     return result;
// }

// add(15, 27)
// add(12, 4, 11, 48)
// add(32, 6, 13, 19, 8)
// add(74, 11, 62, 46, 12, 36)

// Change code below this line
// function addOverNum(num, ...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (num < arg) {
//           total += arg;
//       }
    
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))
// addOverNum(50, 15, 27)
// addOverNum(10, 12, 4, 11, 48, 10, 8)

// Change code below this line
// function findMatches(arr, ...rest) {
//   const matches = []; // Don't change this line
//     for (const item of rest) {
//         if (arr.includes(item)) {
//             matches.push(item);
//         }
//     }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     }
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     }
// };

// 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//       const indexBook = this.books.indexOf(oldName);
//       const change = this.books.splice(indexBook, 1, newName);
    


//     return this.books
//   },
// };

// 36
// const atTheOldToad = {
//     potions : []



//   // Change code above this line
// };

// 37
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions () {
//     return this.potions
//  }
// };


// 38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName)
//   }
// };

// 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//       const indexName = this.potions.indexOf(potionName)
//       const del = this.potions.splice(indexName, 1)
//       return this.potions
//     }
// };

// 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//       const newIndex = this.potions.indexOf(oldName);
//       const arr = this.potions.splice(newIndex, 1, newName)


//     return this.potions
//   },
// };

// 41
// const atTheOldToad = {
// 	potions: [
// 		{ name: 'Speed potion', price: 460 },
// 		{ name: 'Dragon breath', price: 780 },
// 		{ name: 'Stone skin', price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},
// 	addPotion(newPotion) {
// 		for (const potion of this.potions) {
// 			if (potion.name === newPotion.name) {
// 				return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 			}
// 		}
// 		this.potions.push(newPotion);
//     },
    

    
//     removePotion(potionName) {
//       for()
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//     },
  
  
//   updatePotionName(oldName, newName) {
    
      
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
  // Change code above this line
// };







// 	removePotion(potionName) {
// 		for (let i = 0; i < this.potions.length; i++) {
// 			if (potionName === this.potions[i].name) {
// 				return this.potions.splice(i, 1);
// 			}
// 		}

// return `Potion ${potionName} is not in inventory!`;
// 	},
// 	updatePotionName(oldName, newName) {
// 		for (let i = 0; i < this.potions.length; i++) {
// 			if (oldName === this.potions[i].name) {
// 				return (this.potions[i].name = newName);
// 			}
// 		}
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// 	// Change code above this line
// };

// Напишите функцию range(), принимающую два аргумента: начало и конец диапазона,
//     и возвращающую массив, который содержит все числа из диапазона, включая начальное и конечное.Третий
// необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range()
// работает с отрицательным шагом: например, range(5, 2, -1) возвращает [5, 4, 3, 2].

// function range(...args1, ...arg2) {
//     const arr = [];
//     const newArr = args1.push(...arg2);
//     return result = newArr.push(arr);
// }

// console.log(range(1, 4, 6))

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100
// }

// console.log(Object.keys(x).length)

// const temps = [18, 14, 12, 21, 17, 29, 24];


// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(typeof allTemps);
// const minTemps = Math.min(...allTemps);
// const maxTemps = Math.max(...allTemps);
// console.log(maxTemps)
// let sum = 0;
// for (const temp of allTemps) {
//   sum += temp
  
// }
// let avarageTemp =
//   allTemps.length / (lastWeekTemps.length + currentWeekTemps.length + nextWeekTemps.length)
// console.log(avarageTemp)






