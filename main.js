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
