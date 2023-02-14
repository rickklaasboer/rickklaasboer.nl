function saveVisit() {
  const current = parseInt(localStorage.getItem("visits") ?? "0");
  localStorage.setItem("visits", current + 1);

  return current + 1;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const visits = saveVisit();

const quotes = [
  '<a href="https://www.rickklaasboer.nl?recursion=true">To understand what recursion is, you must first understand recursion.</a>',
  "Digital wizard and code poet.",
  "Never gonna give you up.",
  "In desperate need of coffee.",
  "Now functioning with 6 hours of sleep.",
  "Road work ahead? Yeah, I sure hope it does.",
  "Web artisan and magic man.",
  "Staying hydrated, r/hydrohomies",
  "No, I will not elaborate because I have no idea what I just said.",
  "Been there, done that.",
  "console.log('Hello World!')",
  "std::cout << 'Hello world!';",
  "Java is to Javascript what car is to Carpet.",
  "Fake it 'till you make it.",
  "Can't have failing tests if you don't have any tests 🧠.",
  "Testing on production is like A/B testing, without the B.",
  "Turning coffee into code, one sip at a time.",
  "I don't write bugs, I write suprise features.",
  "Why did the chicken cross the road?",
  "If at first you don't succeed, call it version 1.0.",
  "Why do Java developers wear glasses? Because they can't C#.",
  "[Insert funny quote here]",
  "The Tower of Hanoi will give any programmer nightmares.",
];

const didRecurse =
  new URLSearchParams(window.location.search).get("recursion") === "true";

Object.assign(document.getElementById("quote"), {
  innerHTML: didRecurse ? quotes[0] : quotes[randomInt(0, quotes.length - 1)],
});
