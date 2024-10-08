// Loop through each section and handle its rating stars individually
for (let i = 1; i <= 12; i++) {
  // Select all elements with the "i" tag and store them in a NodeList called "stars" for the current section
  const stars = document.querySelectorAll(`.rating-box:nth-of-type(${i}) .stars i`);

  // Loop through the "stars" NodeList for the current section
  stars.forEach((star, index1) => {
      // Add an event listener that runs a function when the "click" event is triggered
      star.addEventListener("click", () => {
          // Loop through the "stars" NodeList Again for the current section
          stars.forEach((star, index2) => {
              // Add the "active" class to the clicked star and any stars with a lower index
              // and remove the "active" class from any stars with a higher index
              index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
          });
      });
  });
}