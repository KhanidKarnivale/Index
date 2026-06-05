
const quotes = [
  "The fit was terrible. The fight was glorious.",
  "Every ship deserves a Khanid skin.",
  "Amarr ships are mandatory. Good taste is optional.",
  "The FC said hold. We interpreted that creatively.",
  "We came for faction warfare. We stayed for the fashion.",
  "Victory is temporary. Screenshots are forever.",
  "If it does not look intimidating on a screenshot, refit it."
];

let quoteIndex = 0;
const quoteText = document.getElementById("quoteText");

function showQuote(index) {
  quoteText.textContent = `“${quotes[index]}”`;
}

document.getElementById("prevQuote").addEventListener("click", () => {
  quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(quoteIndex);
});

document.getElementById("nextQuote").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote(quoteIndex);
});

showQuote(quoteIndex);
setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote(quoteIndex);
}, 5000);

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.done) return;
    entry.target.dataset.done = "true";
    const target = Number(entry.target.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 120));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      entry.target.textContent = current === 999 ? "∞" : current.toLocaleString() + "+";
    }, 14);
  });
}, { threshold: 0.4 });

counters.forEach(el => counterObserver.observe(el));
