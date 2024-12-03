// // Вопрос:
// // Что нужно написать вместо XXX, чтобы найти индекс элемента 'Mars' в массиве planets?

// const planets = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune"
// ]
// const marsIndex = XXX // planets.indexOf['Mars']



// // Вопрос:
// // Функция findElementIndex определяет индекс элемента в массиве или сообщает, что элемент не найден.
// // Что нужно написать вместо XXX, чтобы функция работала?


// function findElementIndex(array, element) {
//     const index = array.indexOf(element);
//     if (index === XXX) { //-1
//         return 'элемент не найден'
//     } else {
//         return {
//             index
//         }
//     }
//     const technologies = ["HTML", "CSS", "JavaScript"]
//     console.log(findElementIndex(technologies, "CSS")) // должно вернуть 1
//     console.log(findElementIndex(technologies, "Node.js")) // должно вернуть 'элемент не найден'





// // Вопрос:
// // Функция findMax принимает массив чисел и возвращает максимальное значение.
// // Что нужно написать вместо XXX, чтобы функция корректно работала?


// function findMax(numbers) {
//     if (numbers.length === 0) {
//         return undefined
//     }
//     let max = numbers[0]  // Предполагаем, что максимальное значение - это первый элемент массива
//     for (let i = 1; i < numbers.length; i++) {
//         if (XXX) { // max < numbers[i]
//             max = numbers[i]
//         }
//     }
//     return max
// }




// Вопрос:
// Напишите вместо XXX строку кода, чтобы из массива pets был удалён элемент 'parrot'

const pets = ['dog', 'cat', 'parrot', 'fish']
XXX
console.log(pets) // Должно вывести ['dog', 'cat', 'fish']
// pets.splice(2, 1)


// Вопрос:
// Что необходимо написать вместо XXX, чтобы вывести в консоль элементы массива notes в обратном порядке?

const notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']
for (XXX; i >= 0; i--) { // i = notes.length-1
    console.log(notes[i])
}



// // Вопрос:
// // Что нужно написать вместо XXX, чтобы вывести в консоль количество книг в массиве books ?

// const books = [
//     'Head First JavaScript Programming',
//     'You Don’t Know JS',
//     'JavaScript: The Definitive Guide',
//     'Lord of the Rings',
// ]
// console.log(XXX) // books.length


// Вопрос:
// Что нужно написать вместо XXX, чтобы добавить книгу 'Grokking Algorithms' в конец массива books?

const books = [
    'Head First JavaScript Programming',
    'You Don’t Know JS',
    'JavaScript: The Definitive Guide',
    'Lord of the Rings',
]
XXX // books.push('Grokking Algorithms')