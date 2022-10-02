function in10() {

        fundament = prompt("Введите основание требуемой системы исчисления", "");

        if (fundament != "16" & fundament != "8" & fundament != "2" & fundament != "10") {

            return;

        }

    userAnswer = prompt("Введите число", "");

if(userAnswer == null) {

    return;

}

answer = parseInt(userAnswer, fundament);

alert(answer);

}

function from10() {

    fundament = prompt("Введите требуемую систему исчисления", "");

        if (fundament != "16" & fundament != "8" & fundament != "2") {

            return;

        }

        userAnswer = prompt("Введите число", "");

if(userAnswer == null) {

    return;

}

userAnswer = +userAnswer;

alert(userAnswer.toString(fundament));

}