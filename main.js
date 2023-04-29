const problem_1 = document.getElementById('problem1__input')
const btn_1 = document.getElementById('btn__1')
const answer_1 = document.getElementById('answer__1')
btn_1.addEventListener('click', () => {
	answer_1.innerHTML = reverseNumber(problem_1.value)
	console.log('clicked')
})
const reverseNumber = (num) => {
	return num.toString().split('').reverse().join('')
}

const problem_2 = document.getElementById('problem2__input')
const btn_2 = document.getElementById('btn__2')
const answer_2 = document.getElementById('answer__2')
btn_2.addEventListener('click', () => {
	answer_2.innerHTML = isPalindrome(problem_2.value)
	console.log('clicked')
})
const isPalindrome = (str) => {
	if (str.length === 0) return 'no string given'
	return str === str.split('').reverse().join('')
}

const problem_3 = document.getElementById('problem3__input')
const btn_3 = document.getElementById('btn__3')
const answer_3 = document.getElementById('answer__3')
btn_3.addEventListener('click', () => {
	answer_3.innerHTML = combinations(problem_3.value)
	console.log('clicked')
})

const combinations = (str) => {
	let result = []
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length + 1; j++) {
			result.push(str.slice(i, j))
		}
	}

	return result.join(', ')
}

const problem_4 = document.getElementById('problem4__input')
const btn_4 = document.getElementById('btn__4')
const answer_4 = document.getElementById('answer__4')
btn_4.addEventListener('click', () => {
	answer_4.innerHTML = alphabetical(problem_4.value)
	console.log('clicked')
})
const alphabetical = (str) => {
	return str.split('').sort().join('')
}

const problem_5 = document.getElementById('problem5__input')
const btn_5 = document.getElementById('btn__5')
const answer_5 = document.getElementById('answer__5')
btn_5.addEventListener('click', () => {
	answer_5.innerHTML = capitalizeFirstLetter(problem_5.value)
	console.log('clicked')
})
const capitalizeFirstLetter = (str) => {
	return str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ')
}

const problem_6 = document.getElementById('problem6__input')
const btn_6 = document.getElementById('btn__6')
const answer_6 = document.getElementById('answer__6')
btn_6.addEventListener('click', () => {
	answer_6.innerHTML = longestWord(problem_6.value)
	console.log('clicked')
})
const longestWord = (str) => {
	let words = str.split(' ')
	let longest = ''
	for (let word of words) {
		if (word.length > longest.length) longest = word
	}
	return longest
}
const problem_7 = document.getElementById('problem7__input')
const btn_7 = document.getElementById('btn__7')
const answer_7 = document.getElementById('answer__7')
btn_7.addEventListener('click', () => {
	answer_7.innerHTML = countVowels(problem_7.value)
	console.log('clicked')
})
const countVowels = (str) => {
	let count = 0
	let vowels = ['a', 'e', 'i', 'o', 'u']
	for (let char of str) {
		if (vowels.includes(char)) count++
	}
	return count
}

const problem_8 = document.getElementById('problem8__input')
const btn_8 = document.getElementById('btn__8')
const answer_8 = document.getElementById('answer__8')
btn_8.addEventListener('click', () => {
	answer_8.innerHTML = isPrime(problem_8.value)
	console.log('clicked')
})
const isPrime = (num) => {
	if (num <= 1) return false
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false
	}
	return true
}

// let person = {
// 	name: 'John'
// }

const problem_9 = document.getElementById('problem9__input')
const btn_9 = document.getElementById('btn__9')
const answer_9 = document.getElementById('answer__9')
btn_9.addEventListener('click', () => {
	answer_9.innerHTML = getType(problem_9.value)
	console.log('clicked')
})
const getType = (value) => {
	return typeof value
}

const problem_10 = document.getElementById('problem10__input')
const btn_10 = document.getElementById('btn__10')
const answer_10 = document.getElementById('answer__10')
btn_10.addEventListener('click', () => {
	answer_10.innerHTML = ''
	matrix(problem_10.value).map((row) => {
		answer_10.innerHTML += row.join(' ') + '<br>'
	})
	console.log('clicked')
})
const matrix = (n) => {
	const matrix = []
	for (let i = 0; i < n; i++) {
		const row = []
		for (let j = 0; j < n; j++) {
			if (i === j) {
				row.push(1)
			} else {
				row.push(0)
			}
		}
		matrix.push(row)
	}
	return matrix
}

const problem_11 = document.getElementById('problem11__input')
const btn_11 = document.getElementById('btn__11')
const answer_11 = document.getElementById('answer__11')
btn_11.addEventListener('click', () => {
	answer_11.innerHTML = secondLowestAndGreatest(problem_11.value)
	console.log('clicked')
})
const secondLowestAndGreatest = (arr) => {
	let result = []
	if (arr.length < 2) return 'array too small'
	if (arr.includes(',')) {
		result = arr.split(',')
	} else {
		result = arr.split(' ')
	}
	result = result.sort((a, b) => a - b)
	return `${result[1]}, ${result[result.length - 2]}`
}

const problem_12 = document.getElementById('problem12__input')
const btn_12 = document.getElementById('btn__12')
const answer_12 = document.getElementById('answer__12')
btn_12.addEventListener('click', () => {
	answer_12.innerHTML = perfectNumber(problem_12.value)
	console.log('clicked')
})

const perfectNumber = (num) => {
	let number = parseInt(num)
	let sum = 0
	for (let i = 1; i <= number / 2; i++) {
		if (number % i === 0) {
			sum += i
		}
	}
	return sum === number && number !== 0
}

const problem_13 = document.getElementById('problem13__input')
const btn_13 = document.getElementById('btn__13')
const answer_13 = document.getElementById('answer__13')
btn_13.addEventListener('click', () => {
	answer_13.innerHTML = factorsOfPositiveInt(problem_13.value)
	console.log('clicked')
})

const factorsOfPositiveInt = (num) => {
	let result = []
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			result.push(i)
		}
	}

	return result
}

const problem_14 = document.getElementById('problem14__input')
const problem_14_2 = document.getElementById('problem14__input2')
const btn_14 = document.getElementById('btn__14')
const answer_14 = document.getElementById('answer__14')
btn_14.addEventListener('click', () => {
	answer_14.innerHTML = coins(problem_14.value, problem_14_2.value)
	console.log('clicked')
})

const coins = (amount, coinsArray) => {
	let result = []
	let coins = [...coinsArray.split(',')].map((coin) => parseInt(coin))
	coins = coins.sort((a, b) => b - a)
	for (let coin of coins) {
		while (amount >= coin) {
			result.push(coin)
			amount -= coin
		}
	}
	return result
}

const problem_15 = document.getElementById('problem15__input')
const problem_15_2 = document.getElementById('problem15__input2')
const btn_15 = document.getElementById('btn__15')
const answer_15 = document.getElementById('answer__15')
btn_15.addEventListener('click', () => {
	answer_15.innerHTML = exp(problem_15.value, problem_15_2.value)
	console.log('clicked')
})

const exp = (base, exponent) => {
	return base ** exponent
}

const problem_16 = document.getElementById('problem16__input')
const btn_16 = document.getElementById('btn__16')
const answer_16 = document.getElementById('answer__16')
btn_16.addEventListener('click', () => {
	answer_16.innerHTML = uniqueChars(problem_16.value)
	console.log('clicked')
})
const uniqueChars = (str) => {
	let result = []
	for (let char of str) {
		if (!result.includes(char)) result.push(char)
	}
	return result.join('')
}

const problem_17 = document.getElementById('problem17__input')
const btn_17 = document.getElementById('btn__17')
const answer_17 = document.getElementById('answer__17')
btn_17.addEventListener('click', () => {
	const obj = numOfOccurs(problem_17.value)
	answer_17.innerHTML = ''
	// answer_17.innerHTML = obj.key.map(() => `${obj.key}: ${key.value}`)
	for (const key in obj) {
		answer_17.innerHTML += `${key}: ${obj[key]}<br>`
	}
	console.log('clicked')
})
const numOfOccurs = (str) => {
	let result = {}
	for (let char of str) {
		if (result[char]) {
			result[char]++
		} else {
			result[char] = 1
		}
	}
	return result
}
