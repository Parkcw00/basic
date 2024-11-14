// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';

// 프로그램 시작
function main() {
    // 사용자로부터 입력을 받습니다.
    console.clear();

    console.log("선택하세요:");
    console.log("1. 사칙연산 계산기");
    console.log("2. 구구단 출력기 (2~9단)\n");

    const choice = readlineSync.question("원하는 번호를 입력하세요: ");

    switch (choice) {
        case '1':
            readlineSync.keyInPause('사칙연산 계산기를 선택하셨습니다');
            calculator();
            break;
        case '2':
            readlineSync.keyInPause("구구단 출력기를 선택하셨습니다.");
            break;
        default:
            readlineSync.keyInPause("잘못된 입력입니다. 1 또는 2를 입력해주세요.");
            return main();
    }

    // 입력에 따라 해당 기능을 실행합니다.
}

// 사칙연산 계산기 함수
function calculator() {

    console.clear();

    console.log("사칙연산 계산기입니다.\n");
    console.log("1. +(덧셈)계산기")
    console.log("2. -(뺄셈)계산기")
    console.log("3. x(곱셈)계산기")
    console.log("4. /(나눗셈)계산기\n")

    const choice = readlineSync.question("원하는 사칙연산을 선택하세요: ");

    let comebackhome = true;

    function consolelog() {
        console.log("==========================")
        console.log("1. 다시 계산하기")
        console.log("2. 사칙연산 계산기로 나가기")
        console.log("3. 메인화면으로 나가기\n")
        console.log("다른 모든 입력: 계산기 종료")
        console.log("==========================\n")
    }

    while (comebackhome) {
        switch (choice) {
            case '1':
                console.clear();
                let answer = [];

                console.log('+(덧셈)계산기를 선택하셨습니다.\n');

                const plusnum1 = readlineSync.question("첫 번째 숫자를 입력하세요: ");
                const plusnum2 = readlineSync.question("두 번째 숫자를 입력하세요: ");

                answer = (Number(plusnum1) + Number(plusnum2))
                console.log("\n정답은" + " " + answer + "입니다\n");

                consolelog();

                const plusout = readlineSync.question("선택하세요: ");

                if (plusout == 1) {
                    console.clear();
                    comebackhome = true;

                } else if (plusout == 2) {
                    readlineSync.keyInPause('사칙연산 계산기로 돌아갑니다.');
                    return calculator();
                } else if (plusout == 3) {
                    readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                    return main();
                } else {
                    comebackhome = false;
                }
                break;

            case '2':
                console.clear();
                let answer1 = [];

                console.log('-(뺄셈)계산기를 선택하셨습니다.\n');

                const minusnum1 = readlineSync.question("첫 번째 숫자를 입력하세요: ");
                const minusnum2 = readlineSync.question("첫 번째 숫자에서 -할 숫자를 입력하세요: ");

                answer1 = (Number(minusnum1) - Number(minusnum2))
                console.log("\n정답은" + " " + answer1 + "입니다\n");

                consolelog();

                const minusout = readlineSync.question("선택하세요: ");

                if (minusout == 1) {
                    console.clear();
                    comebackhome = true;

                } else if (minusout == 2) {
                    readlineSync.keyInPause('사칙연산 계산기로 돌아갑니다.');
                    return calculator();
                } else if (minusout == 3) {
                    readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                    return main();
                } else {
                    comebackhome = false;
                }
                break;

            case '3':
                console.clear();
                let answer2 = [];

                console.log('x(곱셈)계산기를 선택하셨습니다.\n');

                const multiplicationnum1 = readlineSync.question("첫 번째 숫자를 입력하세요: ");
                const multiplicationnum2 = readlineSync.question("첫 번째 숫자에서 곱할 숫자를 입력하세요: ");

                answer2 = (Number(multiplicationnum1) * Number(multiplicationnum2))
                console.log("\n정답은" + " " + answer2 + "입니다\n");

                consolelog();

                const multiplicatioout = readlineSync.question("선택하세요: ");

                if (multiplicatioout == 1) {
                    console.clear();
                    comebackhome = true;

                } else if (multiplicatioout == 2) {
                    readlineSync.keyInPause('사칙연산 계산기로 돌아갑니다.');
                    return calculator();
                } else if (multiplicatioout == 3) {
                    readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                    return main();
                } else {
                    comebackhome = false;
                }
                break;

            case '4':
                console.clear();
                let answer3 = [];

                console.log('/(나눗셈)계산기를 선택하셨습니다.\n');

                const divisionnum1 = readlineSync.question("첫 번째 숫자를 입력하세요: ");
                const divisionnum2 = readlineSync.question("첫 번째 숫자에서 곱할 숫자를 입력하세요: ");

                answer3 = (Number(divisionnum1) / Number(divisionnum2))
                console.log("\n정답은" + " " + answer3 + "입니다\n");

                consolelog();

                const divisionout = readlineSync.question("선택하세요: ");

                if (divisionout == 1) {
                    console.clear();
                    comebackhome = true;

                } else if (divisionout == 2) {
                    readlineSync.keyInPause('사칙연산 계산기로 돌아갑니다.');
                    return calculator();
                } else if (divisionout == 3) {
                    readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                    return main();
                } else {
                    comebackhome = false;
                }
                break;
        }
    }


}

// 구구단 출력 함수
function printMultiplicationTable() {
    // 여기에 코드를 작성하세요.
}

// 프로그램 실행
main();
