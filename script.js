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
// Security Tip API Code
const securityTips = [
  "Use strong and unique passwords for every account.",
  "Enable two-factor authentication wherever possible.",
  "Never share your passwords with anyone.",
  "Regularly update your software and applications.",
  "Avoid clicking on suspicious email links.",
  "Use a password manager to store your passwords.",
  "Do not reuse passwords across different websites.",
  "Always check website URLs before entering sensitive information.",
  "Use antivirus software and keep it updated.",
  "Lock your devices when not in use."
];

function showRandomTip() {
  const tip = securityTips[Math.floor(Math.random() * securityTips.length)];
  const tipElement = document.getElementById("security-tip");
  if (tipElement) {
    tipElement.innerHTML = `💡 Security Tip: ${tip}`;
  }
}

setInterval(showRandomTip, 10000);
window.onload = showRandomTip;

