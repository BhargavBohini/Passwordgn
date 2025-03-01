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

async function fetchCyberNews() {
  try {
    const response = await fetch("https://newsapi.org/v2/everything?q=cybersecurity&apiKey=0713e57ac3f94813b3f032c4016cc10d");
    const data = await response.json();
    if (data.articles.length > 0) {
      const randomArticle = data.articles[Math.floor(Math.random() * data.articles.length)];
      const newsElement = document.getElementById("cyber-news");
      if (newsElement) {
        newsElement.innerHTML = `📰 Cyber News: <a href="${randomArticle.url}" target="_blank">${randomArticle.title}</a>`;
      }
    }
  } catch (error) {
    console.error("Failed to fetch news", error);
  }
}

function showRandomTip() {
  const tip = securityTips[Math.floor(Math.random() * securityTips.length)];
  const tipElement = document.getElementById("security-tip");
  if (tipElement) {
    tipElement.innerHTML = `💡 Security Tip: ${tip}`;
  }
}

setInterval(showRandomTip, 10000);
setInterval(fetchCyberNews, 15000);
window.onload = function () {
  showRandomTip();
  fetchCyberNews();
};
function updateClock() {
    const clock = document.getElementById('digital-clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
async function fetchCyberNews() {
  try {
    const response = await fetch("https://cybernewsapi.vercel.app/api/news");
    const data = await response.json();
    if (data.articles.length > 0) {
      const randomArticle = data.articles[Math.floor(Math.random() * data.articles.length)];
      const newsElement = document.getElementById("cyber-news");
      if (newsElement) {
        newsElement.innerHTML = `📰 Cyber News: <a href="${randomArticle.url}" target="_blank">${randomArticle.title}</a>`;
      }
    }
  } catch (error) {
    console.error("Failed to fetch news", error);
  }
}
