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
            printMultiplicationTable();
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
    console.log("4. /(나눗셈)계산기")
    console.log("5. 메인화면으로 나가기\n")

    const choice = readlineSync.question("원하는 항목을 선택하세요: ");

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
            case '5':
                console.clear();
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
        }
    }


}

// 구구단 출력 함수
function printMultiplicationTable() {
    console.clear();

    console.log("선택하세요:");
    console.log("2. 구구단 2단 출력:");
    console.log("3. 구구단 3단 출력:");
    console.log("4. 구구단 4단 출력:");
    console.log("5. 구구단 5단 출력:");
    console.log("6. 구구단 6단 출력:");
    console.log("7. 구구단 7단 출력:");
    console.log("8. 구구단 8단 출력:");
    console.log("9. 구구단 9단 출력:");
    console.log("10. 메인화면으로 나가기:\n");

    function guguconsolelog() {
        console.log("==========================")
        console.log("1. 구구단 출력기로 나가기")
        console.log("2. 메인화면으로 나가기\n")
        console.log("다른 모든 입력: 출력기 종료")
        console.log("==========================\n")
    }

    const choice = readlineSync.question("출력하고 싶은 항목을 선택하세요: ");

    let gugucomebackhome = true;

    switch (choice) {
        case '2':
            console.clear();

            console.log("2단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`2 x ${i}는 ${2 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu2out = readlineSync.question("선택하세요: ");


            if (gugu2out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu2out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;
        case '3':
            console.clear();

            console.log("3단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`3 x ${i}는 ${3 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu3out = readlineSync.question("선택하세요: ");


            if (gugu3out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu3out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;
        case '4':
            console.clear();

            console.log("4단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`4 x ${i}는 ${4 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu4out = readlineSync.question("선택하세요: ");


            if (gugu4out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu4out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;
        case '5':
            console.clear();

            console.log("5단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`5 x ${i}는 ${5 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu5out = readlineSync.question("선택하세요: ");


            if (gugu5out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu5out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;
        case '6':
            console.clear();

            console.log("6단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`6 x ${i}는 ${6 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu6out = readlineSync.question("선택하세요: ");


            if (gugu6out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu6out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;
        case '7':
            console.clear();

            console.log("7단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`7 x ${i}는 ${7 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu7out = readlineSync.question("선택하세요: ");


            if (gugu7out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu7out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;

        case '8':
            console.clear();

            console.log("8단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`8 x ${i}는 ${8 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu8out = readlineSync.question("선택하세요: ");


            if (gugu8out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu8out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;

        case '9':
            console.clear();

            console.log("9단 입니다\n")
            for (let i = 1; i < 10; i++) {
                console.log(`9 x ${i}는 ${9 * i}입니다\n`)
            }

            guguconsolelog();

            const gugu9out = readlineSync.question("선택하세요: ");


            if (gugu9out == 1) {
                readlineSync.keyInPause('구구단 출력기로 이동합니다.');
                return printMultiplicationTable();
            } else if (gugu9out == 2) {
                readlineSync.keyInPause('메인화면으로 돌아갑니다.');
                return main();
            } else {
                gugucomebackhome = false;
            }
            break;
        case '10':
            console.clear();
            readlineSync.keyInPause('메인화면으로 돌아갑니다.');
            return main();

    }

}

// 프로그램 실행
main();
