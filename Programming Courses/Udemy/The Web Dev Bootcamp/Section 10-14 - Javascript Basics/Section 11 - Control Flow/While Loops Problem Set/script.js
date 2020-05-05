function set1() {
    console.log("Print all numbers between -10 and 19");
    let c = -10;
    while (c < 20) {
        console.log(c);
        c++;
    }
}

function set2() {
    console.log("Print all even numbers between 10 and 40");
    let c = 10;
    while (c <= 40) {
        if (c % 2 === 0) {
            console.log(c);
        }
        c++;
    }
}

function set3() {
    console.log("Print all odd numbers between 300 and 333");
    let c = 300;
    while (c <= 333) {
        if (c % 2 === 1) {
            console.log(c);
        }
        c++;
    }
}

function set4() {
    console.log("Print all numbers divisible between 5 AND 3 between 5 and 50");
    let c = 5;
    while (c <= 50) {
        if (c % 5 === 0 && c % 3 === 0) {
            console.log(c);
        }
        c++;
    }
}

set1();
set2();
set3();
set4();