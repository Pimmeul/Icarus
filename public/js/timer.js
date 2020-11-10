let now = new Date();
let timeStart;
let timeEnds;

let isStarted = timeStart <= now;


function TIMER(Days, Hours, Minutes, Seconds) {
    this.isStarted = isStarted
    this.days = Days;
    this.hours = Hours;
    this.minutes = Minutes;
    this.seconds = Seconds;
    return this;
}

function getTime() {
    let distance = isStarted ? timeEnds - now : timeStart - now;
    return new TIMER(
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((distance % (1000 * 60)) / 1000)
    )
}





