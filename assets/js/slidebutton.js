var inputRange = document.getElementsByClassName('pullee')[0],
    maxValue = 100, // the higher the smoother when dragging
    speed = 12, // thanks to @pixelass for this
    currValue, rafID;







// listen for unlock
function unlockStartHandler() {
    var x = document.getElementsByClassName("pullee").value

    if (x === "1" && y === "1" && z === "1") {
        window.location.assign("https://www.google.com")
    }
}

function unlockEndHandler() {

    // store current value
    currValue = +this.value;

    // determine if we have reached success or not
    if (currValue >= maxValue) {
        successHandler();
        console.log('max value');
    } else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}

// handle range animation
function animateHandler() {

    // update input range
    inputRange.value = currValue;

    // determine if we need to continue
    if (currValue > -1) {
        window.requestAnimationFrame(animateHandler);
        console.log('min value');
    }

    // decrement value
    currValue = currValue - speed;
}

// handle successful unlock
function successHandler() {
    alert('unlocked');
    console.log('unlocked');

    // reset input range
    inputRange.value = 0;
}