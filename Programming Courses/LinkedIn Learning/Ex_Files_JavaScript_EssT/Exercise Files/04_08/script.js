function logScope() {
    var local = 2;

    if (local) {
        let local = "Different";
        console.log("Nested local: " + local);
    }

    console.log("logScope local: " + local);
}

logScope();