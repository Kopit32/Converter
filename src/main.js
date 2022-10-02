#!/usr/bin/env node

function in10() {
	fundament = prompt('Введите основание требуемой системы исчисления', '');
	if ((fundament != '16') & (fundament != '8') & (fundament != '2') & (fundament != '10')) {
		return alert('Введено неверное основание!');
	}

	userAnswer = prompt('Введите число', '');
	if (userAnswer == null) {
		return alert('Ввод не может быть пустым!');
	}

	answer = parseInt(userAnswer, fundament); // or NaN
	if (!answer) {
		return alert('Не могу распознать ввод!');
	}

	alert(answer);
}

function from10() {
	fundament = prompt('Введите требуемую систему исчисления', '');
	if ((fundament != '16') & (fundament != '8') & (fundament != '2')) {
		return alert('Введено неверное основание!');
	}

	userAnswer = prompt('Введите число', '');
	if (userAnswer == null) {
		return alert('Ввод не может быть пустым!');
	}

	userAnswer = parseInt(userAnswer); // or NaN
	if (!userAnswer) {
		return alert('Не могу распознать ввод!');
	}

	alert(userAnswer.toString(fundament));
}
