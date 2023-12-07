'use strict';

/* 
	Теоретичні питання
1. Як можна сторити функцію та як ми можемо її викликати?

	Оголошення функції можливе декількома способами:
		Function Declaration:
			function name(params) {}
		Function Expression:
			const name = function(params) {}
		Arrows Function:
			const name = (params) => {}
		Викликати функцію можна написавши її ім'я та круглі дужки:
			name()

2. Що таке оператор return в JavaScript? Як його використовувати в функціях?

	return - це деректива, яка зупиняє виконання функції. Також використовується для повернення значення в код з області видимості функції. 

3. Що таке параметри та аргументи в функіях та в яких випадках вони використовуються?

	Функція може оголошуватись як з параметрами, так і без них, в залежності від потреб.
	Параметри - це локальні змінні функції які вказуються при оголошенні і використовуються в тілі функції.
	Аргументи - це зовнішні значення, які передані як значення пераметрів під час виклику функції.

4. Як передати функцію аргументом в іншу функцію?

	При виклику функції вказати назву функції яка передається без круглих дужок, а в тілі викликати її вказавши параметр з круглими дужками та надавши йому аргумент.
*/

/*
Практичні завдання
1. Напишіть функцію, яка повертає частку двох чисел. Виведіть результат роботи функції в консоль.
*/

// const calcDivisionNumber = (x, y) => x / y;
// console.log(calcDivisionNumber(8, 2));

/*
2. Завдання: Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами.
Технічні вимоги:
- Отримати за допомогою модального вікна браузера два числа. Провалідувати отримані значення(перевірити, що отримано числа). Якщо користувач ввів не число, запитувати до тих пір, поки не введе число
- Отримати за допомогою модального вікна браузера математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /. Провалідувати отримане значення. Якщо користувач ввів не передбачене значення, вивести alert('Такої операції не існує').
- Створити функцію, в яку передати два значення та операцію.
- Вивести у консоль результат виконання функції.
*/

// перевіряємо введення саме числа, повертаємо його
const getValidatedNumber = (message = 'Введіть число') => {
	let enterdNumber;

	do {
		enterdNumber = prompt(message);
	} while (isNaN(enterdNumber) ||
		enterdNumber === null ||
		enterdNumber === '');

	return +enterdNumber;
}

const firstNumber = getValidatedNumber('Введіть перше число:');
const secondNumber = getValidatedNumber('Введіть друге число:');

// перевіряємо чи введено саме символ математичної операції, повертаємо його
const getEnterChar = (message = 'Введіть символ') => {
	let enterdChar;

	const isValidChar = () => {
		if (['+', '-', '*', '/'].includes(enterdChar)) {
			return true;
		} else {
			alert('Такої операції не існує');
			return false;
		}
	}

	do {
		enterdChar = prompt(message);
	} while (!isValidChar());

	return enterdChar;
}

const enteredChar = getEnterChar('Введіть математичну операцію (+, -, *, /):');


// перевіряємо помилку ділення на 0
const checkDivisionZero = (number, char) => {
	if (number === 0 && char === '/') {
		alert('На нуль ділити не можна!')
		return false;
	}
	return true;
}

// якщо 0 то повертаємось до кроку "2"
const getReturnEnteringSecondNumber = (check, number) => {
	if (check(secondNumber, enteredChar) === true) {
		return number;
	} else {
		return getValidatedNumber('Введіть інше друге число:');
	}
}

const notZero = getReturnEnteringSecondNumber(checkDivisionZero, secondNumber);


// проводимо математичну операцію з введеними числами, повертаємо результат
const calcSum = (numFirst, numSecond, char) => {
	let result;

	switch (char) {
		case '+':
			result = numFirst + numSecond;
			break;
		case '-':
			result = numFirst - numSecond;
		break;
		case '*':
			result = numFirst * numSecond;
		break;
		case '/':
			result = numFirst / numSecond;
			break;
		default:
			break;
	}

	return result;
}

console.log(calcSum(firstNumber, notZero, enteredChar));

/*
3. Опціонально. Завдання:
Реалізувати функцію підрахунку факторіалу числа.
Технічні вимоги:
- Отримати за допомогою модального вікна браузера число, яке введе користувач.
- За допомогою функції порахувати факторіал числа, яке ввів користувач і вивести його на екран.
- Використовувати синтаксис ES6 для роботи зі змінними та функціями.
*/

