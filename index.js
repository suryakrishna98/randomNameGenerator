function generateName() {
  fetch("names.json")
    .then((response) => response.json())
    .then((names) => {
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];
      document.getElementById("randomName").innerText = randomName;
      console.log(randomName);
    })
    .catch((error) => console.error("Error fetching names:", error));
}
