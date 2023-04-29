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

// Output: 2
const problem_18 = document.getElementById('problem18__input')
const problem_18_2 = document.getElementById('problem18__input2')
const btn_18 = document.getElementById('btn__18')
const answer_18 = document.getElementById('answer__18')
btn_18.addEventListener('click', () => {
	// answer_18.innerHTML = binarySearch(problem_18.value, problem_18_2.value)
	const arr = [...problem_18.value.split(',')]
		.map((a) => parseInt(a))
		.sort((a, b) => a - b)

	const value = parseInt(problem_18_2.value)
	answer_18.innerHTML = 'index: ' + binarySearch(arr, value)
	console.log('clicked')
})

const binarySearch = (arr, value) => {
	let start = 0
	let end = arr.length - 1

	while (start <= end) {
		let mid = Math.floor((start + end) / 2)

		if (arr[mid] === value) {
			return mid
		} else if (arr[mid] < value) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}

	return -1 // value not found
}

const problem_19 = document.getElementById('problem19__input')
const problem_19_2 = document.getElementById('problem19__input2')
const btn_19 = document.getElementById('btn__19')
const answer_19 = document.getElementById('answer__19')
btn_19.addEventListener('click', () => {
	let arr = [...problem_19.value.split(',')].map((num) => parseInt(num))
	let value = parseInt(problem_19_2.value)
	answer_19.innerHTML = filterLargerNumber(arr, value)
	console.log('clicked')
})

const filterLargerNumber = (arr, num) => {
	return arr.filter((a) => parseInt(a) > num)
}

const sampleChars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const problem_20 = document.getElementById('problem20__input')
const btn_20 = document.getElementById('btn__20')
const answer_20 = document.getElementById('answer__20')
btn_20.addEventListener('click', () => {
	const length = parseInt(problem_20.value)
	answer_20.innerHTML = randomString(length, sampleChars)
	console.log('clicked')
})

const randomString = (length, chars) => {
	let result = ''
	for (let i = 0; i < length; i++) {
		result += chars[Math.floor(Math.random() * chars.length)]
	}
	return result
}

const problem_21 = document.getElementById('problem21__input')
const problem_21_2 = document.getElementById('problem21__input2')
const btn_21 = document.getElementById('btn__21')
const answer_21 = document.getElementById('answer__21')
btn_21.addEventListener('click', () => {
	const array = [...problem_21.value.split(',')].map((a) => parseInt(a))
	const length = parseInt(problem_21_2.value)
	const result = subSets(array, length)
	answer_21.innerHTML = result.map((a) => a.join(', ')).join('<br>')
	console.log('clicked')
})

const subSets = (arr, length) => {
	let result = []

	const recurse = (start, subset) => {
		if (subset.length === length) {
			result.push(subset)
		} else {
			for (let i = start; i < arr.length; i++) {
				recurse(i + 1, subset.concat(arr[i]))
			}
		}
	}

	recurse(0, [])
	console.log(result)
	return result
}

const problem_22 = document.getElementById('problem22__input')
const problem_22_2 = document.getElementById('problem22__input2')
const btn_22 = document.getElementById('btn__22')
const answer_22 = document.getElementById('answer__22')
btn_22.addEventListener('click', () => {
	answer_22.innerHTML = charOccurrences(problem_22.value, problem_22_2.value)
	console.log('clicked')
})
const charOccurrences = (str, char) => {
	let count = 0
	for (let c of str) {
		if (c === char) count++
	}
	return count
}

const problem_23 = document.getElementById('problem23__input')
const btn_23 = document.getElementById('btn__23')
const answer_23 = document.getElementById('answer__23')
btn_23.addEventListener('click', () => {
	answer_23.innerHTML = firstNoneRepeatChar(problem_23.value)
	console.log('clicked')
})
const firstNoneRepeatChar = (str) => {
	let result = ''
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
			result = str[i]
			break
		}
	}
	return result
}
const problem_24 = document.getElementById('problem24__input')
const btn_24 = document.getElementById('btn__24')
const answer_24 = document.getElementById('answer__24')
btn_24.addEventListener('click', () => {
	answer_24.innerHTML = bubbleSort(problem_24.value)
	console.log('clicked')
})
const bubbleSort = (str) => {
	let result = [...str.split(',')].map((a) => parseInt(a))
	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result.length - i - 1; j++) {
			if (result[j] < result[j + 1]) {
				let temp = result[j]
				result[j] = result[j + 1]
				result[j + 1] = temp
			}
		}
	}
	return result.join(', ')
}

const problem_25 = document.getElementById('problem25__input')
const btn_25 = document.getElementById('btn__25')
const answer_25 = document.getElementById('answer__25')
btn_25.addEventListener('click', () => {
	answer_25.innerHTML = longestName(problem_25.value)
	console.log('clicked')
})
const longestName = (str) => {
	let result = ''
	for (let name of str.split(',')) {
		if (name.length > result.length) result = name
	}
	return result
}
const problem_26 = document.getElementById('problem26__input')
const btn_26 = document.getElementById('btn__26')
const answer_26 = document.getElementById('answer__26')
btn_26.addEventListener('click', () => {
	answer_26.innerHTML = longestSubstring(problem_26.value)
	console.log('clicked')
})
const longestSubstring = (str) => {
	let longestSubstring = ''
	let currentSubstring = ''

	for (let i = 0; i < str.length; i++) {
		const index = currentSubstring.indexOf(str[i])

		if (index !== -1) {
			currentSubstring = currentSubstring.slice(index + 1)
		}

		currentSubstring += str[i]

		if (currentSubstring.length > longestSubstring.length) {
			longestSubstring = currentSubstring
		}
	}

	return longestSubstring
}
const problem_27 = document.getElementById('problem27__input')
const btn_27 = document.getElementById('btn__27')
const answer_27 = document.getElementById('answer__27')
btn_27.addEventListener('click', () => {
	answer_27.innerHTML = longestPalindromeInString(problem_27.value)
	console.log('clicked')
})
const longestPalindromeInString = (str) => {
	let longestPalindrome = ''

	for (let i = 0; i < str.length; i++) {
		for (let j = i; j < str.length; j++) {
			const substring = str.slice(i, j + 1)

			if (
				isPalindrome(substring) &&
				substring.length > longestPalindrome.length
			) {
				longestPalindrome = substring
			}
		}
	}

	return longestPalindrome
}

const callback = (func) => {
	func()
}
const btn_28 = document.getElementById('btn__28')
const answer_28 = document.getElementById('answer__28')
btn_28.addEventListener('click', () => {
	callback(sampleFunction)
	console.log('clicked')
})
const sampleFunction = () => {
	answer_28.innerHTML += 'sample function called <br>'
}

const btn_29 = document.getElementById('btn__29')
const answer_29 = document.getElementById('answer__29')
btn_29.addEventListener('click', () => {
	answer_29.innerHTML = getFunctionName(sampleFunction)
	console.log('clicked')
})
const getFunctionName = (func) => {
	return func.name
}
