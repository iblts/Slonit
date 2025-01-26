import { myIncludes, myIndexOf, mySlice } from './tasks/array-methods'
import { calculate, operations } from './tasks/calculator'
import { getObjectValuesSum, getSortedObjectKeys } from './tasks/objects'
import { startGame } from './tasks/secret-number'
import { capitalize, isSubstring, trimLine } from './tasks/strings'

/* Задание 6. Повторим основы */

startGame()

/* Задание 9. Массивы и методы по работе с ними */

const arr = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(mySlice(arr, 5, 100))
console.log(myIndexOf(arr, 20))
console.log(myIndexOf(arr, 1, 3))
console.log(myIncludes(arr, 5))
console.log(myIncludes(arr, 2, 3))

/* Задание 10. Повторяем объекты */

const object = {
	name: 'Ivan',
	age: 18,
	experience: 1,
}

console.log(getObjectValuesSum(object))
console.log(getSortedObjectKeys(object))

/* Задание 11. Работа со строками */

console.log(capitalize(' слова  '))
console.log(
	trimLine(
		'В частности,    граница обучения кадров влечет за собой процесс внедрения и модернизации кластеризации усилий.',
		13
	)
)
console.log(
	trimLine(
		'В целом, конечно, постоянный количественный рост и сфера нашей активности не даёт нам иного выбора, кроме определения вывода текущих активов.',
		40
	)
)
console.log(isSubstring('abc', 'abcde'))
console.log(isSubstring('abcde', 'cde'))
console.log(isSubstring('abc', 'bcd'))

/* Задание 13. Функциональные выражения */

const selectedOperation = 'multiply'
console.log(calculate(6, 3, operations[selectedOperation])) // 18
