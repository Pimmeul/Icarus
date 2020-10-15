import {} from '../../Config/app.php'
let now = new Date();
let isStarted = getTimeStart() <= now;


function TIMER(Days, Hours, Minutes, Seconds) {
    this.isStarted = isStarted
    this.days = Days;
    this.hours = Hours;
    this.minutes = Minutes;
    this.seconds = Seconds;
}

function getTime() {
    let distance = isStarted ? getTimeEnd() - now : getTimeStart() - now;
    return new TIMER(
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((distance % (1000 * 60)) / 1000)
    )
}





