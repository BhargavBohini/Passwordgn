function updateClock() {
    const clock = document.getElementById("digital-clock");
    if (clock) {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        clock.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
}

setInterval(updateClock, 1000);
window.onload = updateClock;
