while (true) {
    var here = prompt("Are we there yet?");

    if (here.indexOf("yes") !== -1 || here.indexOf("yeah") !== -1) {
        alert("Yay we made it!!");
        break;
    }
}