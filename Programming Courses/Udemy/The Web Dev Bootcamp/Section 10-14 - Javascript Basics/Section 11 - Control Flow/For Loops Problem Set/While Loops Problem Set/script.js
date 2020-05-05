function set1() {
    console.log("Print all numbers between -10 and 19");
    for (let c = -10; c < 20; c++) {
        console.log(c);
    }
}

function set2() {
    console.log("Print all even numbers between 10 and 40");
    for (let c = 10; c <= 40; c++) {
        if (c % 2 === 0) {
            console.log(c);
        }
    }
}

function set3() {
    console.log("Print all odd numbers between 300 and 333");
    for (let c = 300; c <= 333; c++) {
        if (c % 2 === 1) {
            console.log(c);
        }
    }
}

function set4() {
    console.log("Print all numbers divisible between 5 AND 3 between 5 and 50");
    for (let c = 5; c <= 50; c++) {
        if (c % 5 === 0 && c % 3 === 0) {
            console.log(c);
        }
    }
}

set1();
set2();
set3();
set4();