window.onload = function () {
   function updateClock() {
       const clock = document.getElementById('digital-clock');
       if (clock) {
           const now = new Date();
           const date = now.toLocaleDateString();
           let hours = now.getHours();
           const minutes = String(now.getMinutes()).padStart(2, '0');
           const seconds = String(now.getSeconds()).padStart(2, '0');
           const ampm = hours >= 12 ? 'PM' : 'AM';
           hours = hours % 12 || 12; // Convert 0 to 12

           clock.textContent = `${date} | ${hours}:${minutes}:${seconds} ${ampm}`;
       }
   }
   setInterval(updateClock, 1000);
   updateClock();
};
