function Stopwatch() {
    let duration = 0;

    let startTime;
    let stopTime;

    let running = false;

    this.reset = function () {
        startTime = undefined;
        stopTime = undefined;
        duration = 0;
        running = false;
    }

    this.start = function () {
        if (startTime == undefined) {
            startTime = Date.now();
            running = true;
        } else if (running == true) {
            throw new Error('Stopwatch has already started.');
        } else {
            startTime = Date.now();
            running = true;
            //stopTime = undefined;
        }
    }

    this.stop = function () {
        if (running == true) {
            stopTime = Date.now();
            duration = duration + (stopTime - startTime)/1000;
            running = false;
        } else {
            throw new Error('Stopwatch is not started.');
        }
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}