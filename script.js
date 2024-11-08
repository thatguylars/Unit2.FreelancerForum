// Array of possible names and occupations
const names = ["Alice", "Bob", "Carol", "David", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Marketer"];

// Initial array of freelancers
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

// Function to render freelancers to the DOM
function renderFreelancers() {
  const list = document.getElementById("freelancer-list");
  list.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const li = document.createElement("li");
    li.textContent = `${freelancer.name} (${freelancer.occupation}): $${freelancer.price}`;
    list.appendChild(li);
  });
}

// Function to calculate average starting price
function calculateAveragePrice() {
  const totalPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0,
  );
  const averagePrice = totalPrice / freelancers.length;
  document.getElementById("average-price").textContent =
    `Average Starting Price: $${averagePrice}`;
}

// Function to generate a new random freelancer
function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100) + 10;
  freelancers.push({ name, occupation, price });
}

// Initial render
renderFreelancers();
calculateAveragePrice();

// Interval to add new freelancers
setInterval(() => {
  generateRandomFreelancer();
  renderFreelancers();
  calculateAveragePrice();
}, 2000);
