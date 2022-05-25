import "./style.css";
// Helpers (one time job, you can use some library for this):

const objectFromEntries = (entries) =>
  [...entries].reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

const formToObject = (form) => objectFromEntries(new FormData(form).entries());

// Separate logic:

const rates = {
  PLN: 1,
  USD: 4.31,
  EUR: 4.6,
  BDT: 0.05,
  INR: 0.06,
  CNY: 0.65,
  CAD: 3.36,
  MXN: 0.22,
  JPY: 0.03,
  SAR: 1.15
};

const convert = (amount, from, to) => (rates[from] / rates[to]) * amount;

// DOM manipulation:

const output = document.getElementById("output");

document.getElementById("converter").addEventListener("submit", (event) => {
  event.preventDefault();

  const { amount, from, to } = formToObject(event.target);
  const result = convert(amount, from, to);

  output.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
});
